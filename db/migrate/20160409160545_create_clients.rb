class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :product
      t.integer :order_quantity
      t.date :date
      t.boolean :paid
      t.float :dollar_amount
      t.string :email

      t.timestamps null: false
    end
  end
end
