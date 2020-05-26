class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.decimal :lat
      t.decimal :lng
      t.string :name

      t.timestamps
    end
  end
end
