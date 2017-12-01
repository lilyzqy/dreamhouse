Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create, :show, :update] do
      resources :projects, only: [:index]
    end
    resource :session, only: [ :create, :destroy]
    resources :projects, only: [ :create, :destroy, :show] do
      resources :pictures, only: [ :create]
    end
    resources :pictures, only: [:index, :show, :destroy] do
      resource :favorite, only: [:create, :destroy]
      get 'current_user_favorited_pictures', on: :collection
    end

  end

  root to: "static_pages#root"
end
