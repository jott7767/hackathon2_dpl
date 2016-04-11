class ShipmentsController < ApplicationController
  def index
  end

  def distance
    origin = params['origin']
    destination = params['destination']
    product_amount = params['productAmount'].to_i
    product_weight = params['productWeight'].to_i

    weight = product_amount * product_weight
    distance = GoogleDirections.new(origin, destination).distance_in_miles
    time = GoogleDirections.new(origin, destination).drive_time_in_minutes
    time = time.to_f / 60
    time = time / 24
    time = time + 3
    distance_cost = distance * 0.10
    weight_cost = weight * 0.20
    cost = distance_cost + weight_cost
    render json: {distance: distance, cost: cost.to_d, time: time.to_i}
  end
end
