class Api::PicturesController < ApplicationController
  def index
    
  end

  def show

  end

  def create

  end

  def destroy

  end

  private

  def picture_params
    params.require(:picture).permit(:image_url)
  end
end
