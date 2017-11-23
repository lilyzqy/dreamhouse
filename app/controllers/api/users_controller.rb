class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.image_url = "https://www.flickr.com/photos/19159227@N06/37874215174/in/pool-51035615908@N01"

    if @user.save
      login!(@user)
      render :show
    else
      render json:@user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id:params[:id])

    if @user && @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id:params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :image_url, :designer)
  end
end
