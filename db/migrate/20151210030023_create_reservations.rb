class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :table
      t.string :customers
      t.time :reservation_time
      t.integer :num_of_people

      t.timestamps null: false
    end
  end
end
