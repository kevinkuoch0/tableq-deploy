class ChangeReservationsTableToString < ActiveRecord::Migration
	def up
	    change_column :reservations, :table, :string
	end
	def down
	    # This might cause trouble if you have strings longer
	    # than 255 characters.
	    change_column :reservations, :table, :integer
	end
end
