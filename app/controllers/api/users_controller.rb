class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    @user.image_url = "https://images.unsplash.com/photo-1503595855261-9418f48a991a?auto=format&fit=crop&w=668&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user && @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :image_url, :designer)
  end
end
