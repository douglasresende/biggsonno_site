//= require jquery
//= require bootstrap/js/bootstrap

$(function(){
  $("#addNews").click(function(ev){
    ev.preventDefault();
    var input_nome  = $("#nomeNews");
    var input_email = $("#emailNews");
    var nome        = input_nome.val();
    var email       = input_email.val();
    var authenticity_token = $("[name='authenticity_token']")
    var authenticity_token = authenticity_token.val();

    input_nome.removeClass("input-error");
    input_email.removeClass("input-error");

    if(nome == undefined || nome == ""){
      input_nome.attr('title','Nome deve ser preenchido').attr('data-placement','left');
      input_nome.addClass("input-error");
      input_nome.tooltip('show');
    }

    if(email == undefined || email == ""){
      input_email.attr('title','E-mail deve ser preenchido').attr('data-placement','left');
      input_email.addClass("input-error");
      input_email.tooltip('show');
    }

    if(nome != undefined && nome != "" && email != undefined && email != ""){
      $.ajax({
        url: '/newsletters',
        type: 'POST',
        data: {
          'newsletter[name]' : nome,
          'newsletter[email]': email,
          authenticity_token : authenticity_token
        }
      }).complete(function(jqXHR){
        $("#txt_email").html(jqXHR.responseText);
        $("#txt_email").attr("style","color: #FF0");
      })
    }
  })

  $("#submitContact").click(function(ev){
    ev.preventDefault();
    var input_name  = $("#contact_name");
    var input_ddd   = $("#contact_ddd");
    var input_fone  = $("#contact_telefone");
    var input_msg   = $("#contact_message");
    var name        = input_name.val();
    var ddd         = input_ddd.val();
    var fone        = input_fone.val();
    var msg         = input_msg.val();
    var authenticity_token = $("[name='authenticity_token']")
    var authenticity_token = authenticity_token.val();

    input_name.removeClass("input-error");
    input_ddd.removeClass("input-error");
    input_fone.removeClass("input-error");

    if(name == undefined || name == ""){
      input_name.attr('title','Nome deve ser preenchido').attr('data-placement','left');
      input_name.addClass("input-error");
      input_name.tooltip('show');
    }

    if(ddd == undefined || ddd == ""){
      input_ddd.attr('title','DDD deve ser preenchido').attr('data-placement','left');
      input_ddd.addClass("input-error");
      input_ddd.tooltip('show');
    }

    if(fone == undefined || fone == ""){
      input_fone.attr('title','Telefone deve ser preenchido').attr('data-placement','bottom');
      input_fone.addClass("input-error");
      input_fone.tooltip('show');
    }

    if(name != undefined && name != "" && ddd != undefined && ddd != "" && fone != undefined && fone != ""){
      $.ajax({
        url: '/contact.json',
        type: 'POST',
        data: {
          'contact[name]'    : name,
          'contact[ddd]'     : ddd,
          'contact[telefone]': fone,
          'contact[message]' : msg,
          authenticity_token : authenticity_token
        }
      }).complete(function(jqXHR){
        $("#title_contact").html(jqXHR.responseText);
        $("#title_contact").attr("style","color: #00F");
      })
    }
  })
});
