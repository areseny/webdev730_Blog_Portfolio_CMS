# == Schema Information
#
# Table name: social_accounts
#
#  id           :integer          not null, primary key
#  author_id    :integer          not null
#  account_type :integer          not null
#  url          :string(255)      not null
#

url_list = [
  'https://github.com/webdev730',
  'https://www.facebook.com',
  'https://twitter.com',
  'https://linkeding.com'
]

FactoryGirl.define do
  factory :social_account do
    association :author, factory: :author
    sequence(:url) { |i| url_list[i-1] || Faker::Internet::url }
    sequence(:account_type) { |i| SocialAccount.account_types.keys[i-1] }
  end
end
