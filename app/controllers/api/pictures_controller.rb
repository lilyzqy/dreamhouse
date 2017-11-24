class Api::PicturesController < ApplicationController

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
      render json: @picture.errors.full_messages, status: 422
    end
  end

  private

  def picture_params
    params.require(:picture).permit(:image_url)
  end
end
