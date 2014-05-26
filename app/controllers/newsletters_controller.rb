class NewslettersController < ApplicationController
  def create
    @newsletter = Newsletter.new(params.require(:newsletter).permit(:name, :email))
    respond_to do |format|
      if @newsletter.save
        format.json { render :json => "E-mail cadastrado com sucesso", :root => false }
      else
        format.json { render :json => "Erro ao cadastrar este e-mail", :status => :unprocessable_entity }
      end
    end
  end
end
