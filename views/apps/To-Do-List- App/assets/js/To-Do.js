$("ul").on("click","li",function () {
$(this).toggleClass("completed");
 });


$("ul").on("click",".delete",function (event) {
  $(this).parent().fadeOut(250,function () {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = text]").keypress(function () {
  if(event.which === 13){
  var todoText =  $(this).val();
  $(this).val("")
  if(todoText !== ""){
    $("ul").append("<li><span class=delete><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
  }
  }
})
$("#plus").on("click",function () {
  $("input[type = text]").fadeToggle();
})
