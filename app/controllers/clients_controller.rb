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

  def destroy
    if Client.find(params[:id]).destroy
      render json: { id: params[:id].to_i }
    end
  end

  private

  def client_params
    params.require(:client).permit(:name)
  end
end
