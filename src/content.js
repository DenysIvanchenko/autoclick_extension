document.addEventListener("DOMContentLoaded", () => {
    console.log("here")
    setTimeout(function () {
        var Televisao_page = $("[data-activity=Televisao-Samsung]").length;
        if (Televisao_page) {
            var btn_class_list = $(".btn-seleccionar")[0].classList.value;
            var disableis = btn_class_list.indexOf("js-boton-inactivo");
            if (disableis > 0) {
                setInterval(() => {
                    console.log("reload");
                    window.location.reload();
                }, 2000);
            } else {
                console.log("autoclick");
                document.querySelector(".btn-seleccionar").click();
            }
        }
    }, 1000);
}, { once: true });
