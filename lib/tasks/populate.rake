require 'populator'

namespace :populate do
  desc "Populate Inventories"
  task inventories: :environment do
    Inventory.populate(30) do |inventory|
      inventory.item = "#{Faker::Color.color_name} brick"
      inventory.quantity = Faker::Number.number(2)
      inventory.wholesale_price = Faker::Number.decimal(2)
      inventory.retail_price = Faker::Number.decimal(2)
    end
    puts "Inventory Created"
  end
end