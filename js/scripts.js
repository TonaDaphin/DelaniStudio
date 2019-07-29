function res(){
  document.getElementById("username").value = " ";
  document.getElementById("useremail").value = " ";
  document.getElementById("textarea").value = " ";
 }
function giveout(){
  var user= document.getElementById("username").value;
  var emails= document.getElementById("useremail").value;
  var textareas= document.getElementById("textarea").value;
  if ((user ==="") || (emails ==="") || (textareas ==="")){
    alert("Please enter valid data");
  }else{
    alert("Thank you for getting in touch " + user);
  }
}
$(document).ready(function(){
  $("#design_i").click(function(){
    $(".design_p").toggle();
    $("#design_i").toggle();
  });
  $(".design_p").click(function(){
    $("#design_i").toggle();
    $(".design_p").toggle();
  });
  $("#dev_i").click(function(){
    $(".dev_p").toggle();
    $("#dev_i").toggle();
  });
  $(".dev_p").click(function(){
    $("#dev_i").toggle();
    $(".dev_p").toggle();
  });
  $("#do").click(function(){
    $(".pro_p").toggle();
    $("#do").toggle();
  });
  $(".pro_p").click(function(){
    $("#do").toggle();
    $(".pro_p").toggle();
  });
});