Rails.application.routes.draw do
  root 'home#index'

  resources :clients
  resources :inventories
  resources :shipments

  devise_for :users
end
