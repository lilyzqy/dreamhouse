Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create, :show, :update] do
      resources :projects, only: [:index, :create]
    end
    resource :session, only: [ :create, :destroy]
    resources :projects, only: [ :destroy, :show] do
      resources :pictures, only: [ :create]
    end
    resources :pictures, only: [ :show, :destroy]
  end

  root to: "static_pages#root"
end
