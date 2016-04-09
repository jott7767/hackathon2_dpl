class CreateShipments < ActiveRecord::Migration
  def change
    create_table :shipments do |t|
      t.string :origin
      t.string :destination
      t.float :cost
      t.integer :distance

      t.timestamps null: false
    end
  end
end
