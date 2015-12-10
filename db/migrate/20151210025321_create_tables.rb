class CreateTables < ActiveRecord::Migration
  def change
    create_table :tables do |t|
      t.integer :table_num
      t.integer :num_of_seats

      t.timestamps null: false
    end
  end
end
