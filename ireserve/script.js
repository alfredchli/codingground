$( document ).ready(function() {
$( "#login_submit" ).bind( "click", function() {
  $( "login-pane" ).hide();
  $( "admin-pane" ).show();
});

$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
});

function onLoginSubmit() {
	alert(document.getElementByName('username').text);
    document.getElementById('login-pane').style = 'display:none';
	document.getElementById('admin-pane').style = 'display:block';
    return false;
}