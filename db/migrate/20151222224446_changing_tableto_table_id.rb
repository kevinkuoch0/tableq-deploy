class ChangingTabletoTableId < ActiveRecord::Migration
	def up
	    add_column :reservations, :table_id, :string
	end
	def down
	    # This might cause trouble if you have strings longer
	    # than 255 characters.
	    remove_column :reservations, :table, :string
	end
end
