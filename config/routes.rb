Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create, :show, :update]
    resource :session, only: [ :create, :destroy]
    resources :projects, only: [ :create, :destroy, :index, :show] do
      resources :pictures, only: [ :create]
    end
    resources :pictures, only: [ :show, :destroy]
  end

  root to: "static_pages#root"
end
