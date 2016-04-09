class OrdersController < ApplicationController
  def index
    client = Client.find(params[:client_id])
    orders = client.orders
    render json: orders
  end

  def create
    client = Client.find(params[:client_id])
    order = client.orders.new(order_params)
    if order.save
      render json: order
    end
  end

  private

  def order_params
    params.require(:order).permit(:product, :order_quantity, :date, :paid, :dollar_amount)
  end
end
