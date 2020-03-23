class Api::V1::PaddocksController < ApplicationController

    def index
        @paddocks = Paddock.all
        render json: { paddocks: @paddocks }, each_serializer: PaddockSerializer
    end

    def create
        pad = Paddock.create(user_params)
        render json: pad, only: [:id, :name]
    end

    private
    def user_params
        params.require(:paddock).permit(:name)
    end
end
