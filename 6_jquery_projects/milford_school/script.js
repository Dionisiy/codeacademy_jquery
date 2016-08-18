$(document).ready(function(){
  $('.dropdown img').click(function(){
    $(this).next().toggle();
  });


$('form').submit(function() {
  var email = $('#email').val();
  var password = $('#password').val();

  if( email === ""){
    $('.email-error').text('you forgot enter your email');
  }
  if(password === ""){
    $('.password-error').append('You did not enter your password, B.I.T.C.H.!.');
  }
  return false;
 });
});

