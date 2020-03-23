class Api::V1::DinosaursController < ApplicationController

    def index
        @dinos = Dinosaur.all
        render json: @dinos, each_serializer: DinosaurSerializer
    end

    def show
        @dino = Dinosaur.find(params[:id])
        render json: @dino, serializer: DinosaurSerializer
    end


end
