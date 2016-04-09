Rails.application.routes.draw do
  root 'home#index'

  resources :clients do
    resources :orders
  end
  
  get '/get_inventory', to: 'inventories#get_inventory'
  

  resources :inventories
  resources :shipments

  devise_for :users
end
