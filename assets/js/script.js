$(function () {

  $("#enviarCorreo").click(function() {
    alert("El correo fue enviado correctamente...")
  })

  $("#favoritos").click(function() {
    alert("¡La página se ha agregado exitosamente a tus favoritos!")
  })

  $(".card-title").click(function(){
    $(".card-text").toggle();
  })

  $('body').on('dblclick', 'u', function() {
    $(this).css("color","red");
  })

  $('main').on('dblclick', 'h1', function() {
    $(this).css("color","green");
  })

  $('main').on('dblclick', 'h4', function() {
    $(this).css("color","blue");
  })

})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
