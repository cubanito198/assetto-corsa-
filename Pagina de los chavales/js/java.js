 // Efecto de escala al pasar el cursor sobre elementos article
 $(document).ready(function () {
    $("section article").hover(function () {
        $(this).addClass("aumentado")
    }, function () {
        $(this).removeClass("aumentado")
  })
})