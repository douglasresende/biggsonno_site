class ContactController < ApplicationController
  def create
    respond_to do |format|
      begin
        name = params[:contact][:name]
        fone = "(#{params[:contact][:ddd]}) #{params[:contact][:telefone]}"
        message = params[:contact][:message]
        if ContactMailer.send_mail(name, fone, message).deliver
          format.json { render :json => "Obrigado! Em breve entraremos em contato.", :root => false }
        else
          format.json { render :json => "Não foi possível registrar o contato.", :status => :unprocessable_entity }
        end
      rescue ScriptError
        format.json { render :json => "Não foi possível registrar o contato.", :status => :unprocessable_entity }
      end
    end
  end

  def ajsi
    respond_to do |format|
      begin
        name = params[:name]
        fone = params[:telefone]
        message = params[:message]
        if AjsiMailer.send_mail(name, fone, message).deliver
          format.json { render :json => "Reserva registrada.".to_json, :root => false }
        else
          format.json { render :json => "Não foi possível registrar a reserva.".to_json, :status => :unprocessable_entity }
        end
      rescue ScriptError
        format.json { render :json => "Não foi possível registrar a reserva.".to_json, :status => :unprocessable_entity }
      end
    end
  end
end
