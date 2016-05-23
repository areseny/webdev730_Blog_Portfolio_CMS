require 'rails_helper'

feature 'Create new project', js: true do

  background { sign_in_and_redirect_to('/cms/projects/new') }
  after { page.execute_script("localStorage.clear()") }

  context 'when necessary info are blank' do
    scenario "fails to create new project owing to lack of title" do
      fill_in 'title', with: ''
      fill_in 'sourceUrl', with: 'http://google.com'
      fill_in 'sampleUrl', with: 'http://google.com'
      fill_in 'Enter Tag Name', with: 'sample'
      find("input[placeholder='Enter Tag Name']").native.send_keys(:return)
      attach_file "image", "#{Rails.root}/spec/fixtures/images/sample.png"
      click_on 'Create'
      sleep 1
      expect(page).to have_content('Create New Project')
    end
  end

  context 'when necessary info are filled' do
    scenario "creates new project successfully" do
      fill_in 'title', with: 'sample title'
      fill_in 'sourceUrl', with: 'http://google.com'
      fill_in 'sampleUrl', with: 'http://google.com'
      fill_in 'Enter Tag Name', with: 'sample'
      find("input[placeholder='Enter Tag Name']").native.send_keys(:return)
      attach_file "image", "#{Rails.root}/spec/fixtures/images/sample.png"
      click_on 'Create'

      sleep 1
      expect(page).to have_content('Projects')
      expect(page).to have_content('sample title')
      expect(Project.last.title).to eq 'sample title'
      expect(Project.last.tags.map(&:name)).to eq ['sample']
    end
  end
end