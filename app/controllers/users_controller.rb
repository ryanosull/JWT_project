class UsersController < ApplicationController
    
    
    before_action :authorize!, only: [:update] # [:delete]
    
    def update
        render json: {messages: ['This is the update method.'], user: current_user}, status: :ok #200
    end
    
    
    
    
    
    
    
    #end
end
