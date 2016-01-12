class RealtimeReservationsController < FayeRails::Controller
	observe Reservation, :after_create do |reservation|
    puts "Reservation created and RealtimeReservationsController got it"
		RealtimeReservationsController.publish("/reservations", reservation.attributes)
	end

  channel '/reservations' do
    monitor :subscribe do
      puts "Client #{client_id} subscribed to #{channel}."                            
    end 
    monitor :unsubscribe do
      puts "Client #{client_id} unsubscribed from #{channel}."
    end 
    monitor :publish do
      puts "Client #{client_id} published #{data.inspect} to #{channel}."
    end 
  end
end
