class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.string :item
      t.float :quantity
      t.float :wholesale_price
      t.float :retail_price
      t.attachment :picture

      t.timestamps null: false
    end
  end
end
