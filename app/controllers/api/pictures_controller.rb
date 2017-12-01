class Api::PicturesController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def current_user_favorited_pictures
    @pictures = current_user.favorited_pictures
    render :index
  end


  def index
    @pictures = Picture.all
  end

  def show
    @picture = Picture.find_by(id: params[:id])
  end

  def create
    @picture = Picture.new(picture_params)
    @picture.project_id = params[:project_id]
    if @picture.save
      render :show
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def destroy
    @picture = current_user.pictures.find_by(id: params[:id])
    if @picture
      @picture.destroy
      render :show
    else
      render json: ["Can't find picture"], status: 404
    end
  end

  private

  def picture_params
    params.require(:picture).permit(:image_url)
  end
end
