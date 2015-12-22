class RemoveReservationsCustomersColumnAndAddUserId < ActiveRecord::Migration
  def change
  	remove_column :reservations, :customers
  	add_column :reservations, :user_id, :integer
  end
end
