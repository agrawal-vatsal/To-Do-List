$(".alignRight").click(function() {
  $("input").slideToggle('fast');
});
$('input').keypress(function(event) {
  if (event.which === 13) {
    createNewDiv($('input').val());
    $('input').val("");
  }
});
function createNewDiv(text) {
  var image = $("<span class='sideBox'><i class='fa fa-trash' aria-hidden='true'></i></span>");
  var para = $("<span class='task'>" + text + "</span>");
  var divHtml = "<div class='oneToDo'></div>";
  var div = $(divHtml);
  $(div).append(image);
  $(div).append(para);
  $("#allToDos").append(div);
  $(image).on("click", function () {
    $(para).removeClass("strikeThrough");
    $(div).slideToggle('fast', function () {
      $(this).remove();
    });
  });
  $(div).on("click", function () {
    $(this).toggleClass("strikeThrough");
  });
}
