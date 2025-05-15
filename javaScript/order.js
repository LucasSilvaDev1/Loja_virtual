const imagemkit = document.getElementById("imgkit")
const btkit1 = document.getElementById('btkit1')
const btkit2 = document.getElementById("btkit2")
const btkit3 = document.getElementById("btkit3")
const btkit4 = document.getElementById("btkit4")

function bkit1() {
    btkit1.classList.add('clicado')
    btkit2.classList.remove('clicado')
    btkit3.classList.remove('clicado')
    btkit4.classList.remove('clicado')

    document.getElementById('imgkit').src = "imgs/kits/kit-ma01.jpg"
}

function kit2() {
    btkit2.classList.add('clicado')
    btkit1.classList.remove('clicado')
    btkit3.classList.remove('clicado')
    btkit4.classList.remove('clicado')

    document.getElementById('imgkit').src = "imgs/kits/kit-ma02.jpg"
}

function kit3() {
    btkit3.classList.add('clicado')
    btkit2.classList.remove('clicado')
    btkit1.classList.remove('clicado')
    btkit4.classList.remove('clicado')

    document.getElementById('imgkit').src = "imgs/kits/kit-ma03.jpg"
}

function kit4() {
    btkit4.classList.add('clicado')
    btkit2.classList.remove('clicado')
    btkit3.classList.remove('clicado')
    btkit1.classList.remove('clicado')

    document.getElementById('imgkit').src = "imgs/kits/kit-ma04.jpg"
}

// function addCategorias() {
//     let btnCA = document.querySelectorAll(".menu")
//     let categorias = document.querySelectorAll(".categorias")

//     categorias.forEach(categoria => {
//         if (categoria.classList.contains("hidden")) {
//             categoria.classList.remove("hidden");
//         } else {
//             categoria.classList.add("hidden")
//         }
//     })


// }