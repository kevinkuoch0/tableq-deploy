class Reservation < ActiveRecord::Base
	belongs_to :users 
	belongs_to :tables
end
