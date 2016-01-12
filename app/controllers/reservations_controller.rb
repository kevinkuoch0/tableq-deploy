class ReservationsController < ApplicationController
  def index
    @reservation = Reservation.new
    @reservations = Reservation.where("reservation_time between ? and ?", Time.now.beginning_of_day, Time.now.end_of_day)
  end


  def create
  	@reservation = Reservation.new(reservation_params.merge(email: current_user.email, user_id: current_user.id, reservation_time: reservation_time))
    @reservation.save

    respond_to do |format|
      format.html { redirect_to reservations_path }
      format.js # render reservations/create.js.erb
    end
  end

  private

  def reservation_params
  	params.require(:reservation).permit(:num_of_people, :email, :user_id, :table)
  end

  def reservation_time
    params[:reservation][:reservation_time].to_time
  end
end
