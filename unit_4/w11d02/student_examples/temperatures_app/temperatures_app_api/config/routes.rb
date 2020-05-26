Rails.application.routes.draw do
  resources :locations, only: [:index, :show] do
     resources :temperatures, only: [:index, :create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
