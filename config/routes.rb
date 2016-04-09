Rails.application.routes.draw do

  root 'home#index'

  resources :clients

  resources :clients do
    resources :orders
  end

  resources :inventories
  resources :shipments
  resources :about

  devise_for :users

  #GET routes

  get '/distance', to: 'shipments#distance'

end
