# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  description :text(65535)
#  image       :string(255)
#  sample_url  :string(255)
#  source_url  :string(255)
#  accepted    :boolean          default("0"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project::Form < ActiveType::Record[Project]
  include DataURIToImageConverter
  include TaggingCleaner
  include TaggingAttributesTrimer

  TAGGINGS_ATTRIBUTES = 'taggings_attributes'.freeze
  PERMITTED_ATTRIBUTES = [
    :title, :description, :image, :source_url, :caption,
    taggings_attributes: [:id, :text]
  ].freeze

  validates :description, presence: true, if: proc { |project| project.accepted }
  validates :image, presence: true, if: proc { |project| project.accepted }
  validates :source_url,
            presence: true,
            format: { with: URI.regexp, message: "%{value} does not appear to be a valid URL" },
            if: proc { |project| project.accepted }

  accepts_nested_attributes_for :taggings, reject_if: ->(attributes) { attributes['tag_id'].blank? }

  def save(params)
    ActiveRecord::Base.transaction do
      delete_unnecessary_tags!(params[TAGGINGS_ATTRIBUTES]) if self.id
      trim_tagging_attributes!(params[TAGGINGS_ATTRIBUTES])

      params['image'] = convert_data_uri_to_upload(params['image']) if params['image']&.start_with?('data')
      update!(params)
      true
    end

  rescue => e
    errors[:base] << e.message
    p e.message, e.backtrace_locations
    logger.error "error: #{e.message}, location: #{e.backtrace_locations}"
    false
  end

end
