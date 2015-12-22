class ReservationsController < ApplicationController
  def index
    @reservation = Reservation.new
  end


  def create
  	@reservation = Reservation.new(reservation_params.merge(email: current_user.email, user_id: current_user.id))
  	@reservation.save
    redirect_to reservations_path
  end

  private

  def reservation_params
  	params.require(:reservation).permit(:num_of_people, :reservation_time, :table, :email, :user_id)
  end
end
