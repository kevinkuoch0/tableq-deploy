class ReservationsController < ApplicationController
  def index
    @reservation = Reservation.new
  end


  def create
  	@reservation = Reservation.new(reservation_params)
  	@reservation.save
  end

  private

  def reservation_params
  	params.require(:reservation).permit(:num_of_people, :reservation_time, :table)
  end
end
