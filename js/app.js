
console.log("hola funciona")

/* boton to top */
document.addEventListener("DOMContentLoaded", function(event) {
  //código a ejecutar cuando el DOM está listo para recibir acciones

    const toTop = document.querySelector(".totop");

    window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
    })
});

/* loader */

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 10)
});


