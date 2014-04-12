//= require jquery
//= require bootstrap/js/bootstrap

$(function(){
  $("#addNews").click(function(ev){
    ev.preventDefault();
    var input_nome  = $("#nomeNews");
    var input_email = $("#emailNews");
    var nome    = input_nome.val();
    var email   = input_email.val();

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

    if(nome != undefined && nome != "" & email != undefined && email != ""){
      $.ajax({
        url: '',
        type: 'POST',
        data: {
          news_name: nome,
          news_email: email
        },
        success: function(event, xhr, settings){
          console.log(event);
          console.log(xhr);
          console.log(settings);
        },
        error: function(event, jqxhr, settings, exception){
          console.log(event);
          console.log(jqxhr);
          console.log(settings);
          console.log(exception);
        }
      })
    }
  })
});
