# encoding: utf-8
class AjsiMailer < ActionMailer::Base
  add_template_helper(ApplicationHelper)
  default :to => 'douglas@maxstudio.com.br'
  default :from => 'noreply@biggsonno.com.br'

  def send_mail(name, fone, message)
    @name    = name
    @fone    = fone
    @message = message
    @host    = "http://www.ajsi.com.br"
    mail({
      :subject => "[ AJSI ] Reserva"
    })
  end
end
