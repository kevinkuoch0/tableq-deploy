class RealtimeReservationsController < FayeRails::Controller
	observe Reservation, :after_create do |reservation|
		RealtimeReservationsController.publish("/reservations", reservation.attributes)
	end
end