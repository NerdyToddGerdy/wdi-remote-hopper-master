class AddColumnToCharacter < ActiveRecord::Migration[5.0]
  def change
     add_column :characters, :vehicle_id, :integer
  end
end
