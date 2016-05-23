# == Schema Information
#
# Table name: item_texts
#
#  id          :integer          not null, primary key
#  description :text(65535)      not null
#

require 'rails_helper'

RSpec.describe ItemText, type: :model do
  describe '#validation' do
    it { is_expected.to have_one(:item).dependent(:destroy) }
    it { is_expected.to validate_presence_of(:description) }
  end
end
