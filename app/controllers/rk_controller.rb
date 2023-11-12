# frozen_string_literal: true

# RkController
class RkController < ApplicationController
  include RkHelper

  def view
    # [/^\d+$/] - Только положительные целые числа  [^(-?\d+\s?)+&] - через пробел и отрицательные
    @result = params[:num][/^(-?\d+(\s-?\d+)*)$/] ? happy(num) : 'Error'
    respond_to do |format|
      format.html
      format.json do
        render json:
        { type: @result.class.to_s, value: @result }
      end
    end
  end
end
