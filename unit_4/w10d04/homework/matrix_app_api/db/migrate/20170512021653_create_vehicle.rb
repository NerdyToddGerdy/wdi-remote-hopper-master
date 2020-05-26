class CreateVehicle < ActiveRecord::Migration[5.0]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.string :style
    end
  end
end
