Rails.application.routes.draw do
  root 'home#index'

  resources :clients do
    resources :orders
  end
  
  resources :inventories
  resources :shipments

  devise_for :users
end
