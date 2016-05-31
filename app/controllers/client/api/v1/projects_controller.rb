class Client::Api::V1::ProjectsController < Client::ApplicationController

  def index
    projects = Project.order(updated_at: :desc)
    render json: projects, each_serializer: ProjectsSerializer
  end

end