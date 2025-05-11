

function addCategorias() {
    let btnCA = document.querySelectorAll(".menu")
    let categorias = document.querySelectorAll(".categorias")

    categorias.forEach(categoria => {
        if (categoria.classList.contains("hidden")) {
            categoria.classList.remove("hidden");
        } else {
            categoria.classList.add("hidden")
        }
    })


}