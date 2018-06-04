var player1 = null;
var player2 = null;
var player1Name = "";
var palyer2Name = "";
var yourPlayerName = "";
var turn = 1;

var database = firebase.database();

$('.nameSubmit').on('click', function(){
  var name = $('#name').val().trim();
  $('#player1>h1').text(name);
})