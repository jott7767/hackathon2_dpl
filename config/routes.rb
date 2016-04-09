Rails.application.routes.draw do

  root 'home#index'

  resources :clients

  resources :clients do
    resources :orders
  end

  get '/get_inventory', to: 'inventories#get_inventory'


  resources :inventories
  resources :shipments
  resources :about

  devise_for :users

  #GET routes

  get '/distance', to: 'shipments#distance'

end
