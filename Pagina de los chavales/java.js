 // Efecto de escala al pasar el cursor sobre elementos article
 $(document).ready(function () {
    $("section article").hover(function () {
        $(this).addClass("aumentado")
    }, function () {
        $(this).removeClass("aumentado")
  })
})

//barra de busqueda 
document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("myInput");
    var list = document.getElementById("myList");

    input.addEventListener("input", function () {
        var filter = input.value.toLowerCase();
        var items = list.getElementsByTagName("li");

        for (var i = 0; i < items.length; i++) {
            var text = items[i].textContent.toLowerCase();
            items[i].style.display = text.includes(filter) ? "" : "none";
        }
    })
})