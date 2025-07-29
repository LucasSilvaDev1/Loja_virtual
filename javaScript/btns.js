
// botão de busca

const search = document.getElementById('search')
const search2 = document.getElementById('pesquisa')

const busca = document.getElementById('busca').addEventListener('click', function () {
    search.style.display = 'block'
    search2.style.visibility = 'visible'
    search.focus(search)

})


search.addEventListener('focus', () => {
    if (search.classList.contains('off')) {
        search.classList.replace('off', 'on')
        search.style.display = 'flex'

    }
})
search.addEventListener('blur', () => {
    if (search.classList.contains('on')) {
        search.classList.replace('on', 'off')
        search2.style.visibility = 'hidden'
        search.style.display = 'none'
    }
})

// botões do menu lateral


// abrir e fechar menu lateral
const menuLateral = document.getElementById('Menulateral')

document.getElementById('fecharMenu').addEventListener('click', function () {

    menuLateral.style.display = 'none'
})

document.getElementById('openMenu').addEventListener('click', function () {
    menuLateral.style.display = 'grid'
})

// abrir a janela Loja
const btnLoja = document.getElementById('btnLoja')
document.getElementById('btnLoja').addEventListener('click', function () {

    const btnLojaC = document.getElementById('topLoja')
    const subLoja = document.getElementById('subLoja')
    const seta = document.getElementById('seta')
    if (btnLoja.classList.contains('aberto')) {
        subLoja.style.display = 'none'
        seta.style.transform = 'rotate(360deg)'
        btnLoja.classList.replace('aberto', 'fechado')
    } else if (btnLoja.classList.contains('fechado')) {
        subLoja.style.display = 'flex'
        seta.style.transform = 'rotate(180deg)'
        btnLoja.classList.replace('fechado', 'aberto')

    }
})

// redirecionamento para paginas de compra

function buyPage(id) {
    const camisa = id

    localStorage.setItem('camisa', camisa)
    // console.log(localStorage.getItem('camisa'))
    window.location.href = 'pags/pagCompra.html'

}