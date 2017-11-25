class Api::ProjectController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]
  
  def index
    user = User.find_by(id: params[:userId])
    @projects = user.projects
  end

  def show
    @project = Project.find_by(id: params[:id])
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = params[:userId]
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = current_user.projects.find_by(id: params[:id])
    if @project
      @project.destroy
      render :show
    else
      render json: ["Can't find project"], status: 404
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :state, :city)
  end
end
