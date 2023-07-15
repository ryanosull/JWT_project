class ApplicationController < ActionController::API
    include ActionController::Cookies


    # def hello_world 
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end

    def current_user
        auth_token = request.headers['auth-token'] #DO NOT use 'auth_token' - NO UNDERSCORE
        if auth_token and auth_token != 'undefined'
            token = JWT.decode(auth_token, ENV['JWT_TOKEN'])[0] #pull first item from array
            return User.find_by(id: token['user'])
        else
            return nil
        end
    end


    def authorize! 
        unless current_user
            render json: {errors: ['You must be logged in to do that']}, status: :unauthorized #401
        end
    end







    #end
end
