class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :product
      t.integer :order_quantity
      t.date :date
      t.boolean :paid
      t.float :dollar_amount

      t.timestamps null: false
    end
  end
end
