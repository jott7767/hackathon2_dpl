class ClientsController < ApplicationController
  def index
    @clients = Client.all
  end

  def create
    client = Client.new(client_params)
    if client.save
      render json: client
    end
  end

  private

  def client_params
    params.require(:client).permit(:name)
  end
end
