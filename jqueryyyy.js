$(document).ready(function(){
$("#button").click(function(){
    var toAdd = $('input[name=checkName]').val();

$('#heroname').append('<div class="name">' + toAdd + '</div>');

});});

$(function() {
  $('#craftingweapon').click(function(){
    $("#heropicture").attr('src',"herosword.png");
  });
});
$(function() {
  $('#craftingweapon2').click(function(){
    $("#heropicture").attr('src',"herobow.png");
  });
});
$(function() {
  $('#craftingweapon3').click(function(){
    $("#heropicture").attr('src',"herowand.png");
  });
});
$(function() {
  $('#craftingweapon4').click(function(){
    $("#heropicture").attr('src',"heroshield.png");
  });
});
$(function() {
    $("#craftingweapon").click(function(){
        $("#stam").text("Stamina - 100");
        $("#str").text("Strenght - 150");
        $("#int").text("Intellect - 100");
        $("#dex").text("Dexterity - 100");
    });
});
$(function() {
    $("#craftingweapon4").click(function(){
        $("#stam").text("Stamina - 150");
        $("#str").text("Strenght - 100");
        $("#int").text("Intellect - 100");
        $("#dex").text("Dexterity - 100");
    });
});
$(function() {
    $("#craftingweapon2").click(function(){
        $("#stam").text("Stamina - 100");
        $("#str").text("Strenght - 100");
        $("#int").text("Intellect - 100");
        $("#dex").text("Dexterity - 150");
    });
});
$(function() {
    $("#craftingweapon3").click(function(){
        $("#stam").text("Stamina - 100");
        $("#str").text("Strenght - 100");
        $("#int").text("Intellect - 150");
        $("#dex").text("Dexterity - 100");
    });
});
$(function() {
    $("#x").click(function(){
        $("#heroname").text(" ");
    });
});