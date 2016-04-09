class InventoriesController < ApplicationController
  def index
  end
  
  def get_inventory
    @inventories = Inventory.all
      render json: @inventories
  end
  
  def show
  end
  
  def create
    inventory = Inventory.new(inventory_params)
    if inventory.save
      render json: inventory
    end
  end
  
  def update
    inventory = Inventory.find(params[:id])
    if inventory.update(inventory_params)
      render json: inventory
    end
  end
  
  def destroy
    if Inventory.find(params[:id]).destroy
      render json: { id: params[:id].to_i }
    end
  end
  
  private
    def inventory_params
      params.require(:inventory).permit(:item, :quantity, :wholesale_price, :retail_price)
    end
  
end
