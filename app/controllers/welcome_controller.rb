class WelcomeController < ApplicationController
		def index
			if user_signed_in?
				redirect_to signed_in_index_path
			elsif owner_signed_in?
				redirect_to signed_in_index_path
			else
				root_path
			end
		end
end
