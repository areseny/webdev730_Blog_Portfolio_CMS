class Cms::Api::Authors::SessionsController < Devise::SessionsController
  protect_from_forgery except: %w(create destroy)
  skip_before_action :authenticate_author_from_token!
  skip_before_action :verify_signed_out_user, only: :destroy
  respond_to :json

  def create
    author = Author.find_for_database_authentication(email: session_params[:email])
    return invalid_login_attempt unless author

    if author.valid_password?(session_params[:password])
      sign_in :author, author
      render json: author, serializer: SessionSerializer, root: nil
    else
      invalid_login_attempt
    end
  end

  def destroy
    sign_out :author
    render nothing: true, status: 200
  end

  private

  def session_params
    params.require(:author).permit(:email, :password)
  end

  def invalid_login_attempt
    warden.custom_failure!
    render json: { error: ('invalid_login_attempt') }, status: :unprocessable_entity
  end

end
