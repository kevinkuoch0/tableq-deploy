class ChangeTableToStringOnReservations < ActiveRecord::Migration
  def change
  	change_column :reservations, :table, :string
  end
end
