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

//se mueve todo menos el fondo 
/*
//Espera a que el DOM esté completamente cargado
$(document).ready(function () {
    // Selecciona el contenedor de los elementos li
    var carContainer = $("#carContainer");

    // Registra el evento de la rueda del ratón
    carContainer.on("wheel", function (event) {
        // Obtiene la cantidad de desplazamiento de la rueda
        var deltaY = event.originalEvent.deltaY;

        // Obtiene la posición actual de desplazamiento
        var currentScrollPosition = carContainer.scrollTop();

        // Aplica el desplazamiento a la posición actual
        carContainer.scrollTop(currentScrollPosition + deltaY);

        // Evita el comportamiento predeterminado de la rueda del ratón (por ejemplo, desplazamiento de la página)
        event.preventDefault();
    });
});*/
