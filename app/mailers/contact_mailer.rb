# encoding: utf-8
class ContactMailer < ActionMailer::Base
  add_template_helper(ApplicationHelper)
  default :to => 'douglas@biggsonno.com.br, douglas@maxstudio.com.br, ilmacamargo10@hotmail.com'
  default :from => 'noreply@biggsonno.com.br'

  def send_mail(name, fone, message)
    @name    = name
    @fone    = fone
    @message = message
    @host    = "http://www.biggsonno.com.br"
    mail({
      :subject => "[ BiggSonno Site ] Contato"
    })
  end
end
