Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create, :show, :update] do
      resources :projects, only: [ :create, :destroy] do
        resources :pictures, only: [:create, :destroy]
      end
    end
    resource :session, only: [ :create, :destroy]
    resources :pictures, only: [ :index, :show]
    resources :projects, only: [ :index, :show]
  end

  root to: "static_pages#root"
end
