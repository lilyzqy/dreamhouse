class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new
    @favorite.user_id = current_user.id
    @favorite.picture_id = params[:picture_id]
    if @favorite.save
      @picture = @favorite.picture
      render 'api/pictures/show'
    else
      render json: @favorite.errors.full_messages, status: 401
    end
  end

  def destroy
    @favorite = Favorite.find_by(user_id: current_user.id, picture_id: params[:picture_id])
    @favorite.destroy
    @picture = @favorite.picture
    render 'api/pictures/show'
  end

end
