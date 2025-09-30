
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
    window.location.href = '../pags/pagCompra.html'

}

// mudar camisas na segunda pagina


function mudarcamisa() {
    const img = document.getElementById("imgBuy1")
    const img2 = document.getElementById('imgBuy')
    const camisa = window.localStorage.getItem('camisa')
    if (img.classList.contains('v')) {
        img.classList.replace("v", "f")
        img.src = '../imgs/masculino/camisas/' + camisa + '-v.png'
        img2.src = '../imgs/masculino/camisas/' + camisa + '-f.png'
    } else if (img.classList.contains('f')) {
        img.classList.replace('f', 'v')
        img.src = '../imgs/masculino/camisas/' + camisa + '-f.png'
        img2.src = '../imgs/masculino/camisas/' + camisa + '-v.png'
    }
}


// mudar quantidade 

const inputQuant = document.getElementById('NumInput')
let valor = Number(inputQuant.placeholder)


document.getElementById('btReduce').addEventListener("click", function () {
    if (inputQuant.placeholder > 1) {
        valor--
        inputQuant.placeholder = valor
    }
    console.log(valor)
})
document.getElementById('btAdd').addEventListener('click', function () {
    if (inputQuant.placeholder < 100) {
        valor++
        inputQuant.placeholder = valor
    }
    console.log(valor)
})

// mudar conteudo recomendado na pagina de compra 

function sugestoes() {

    let reco = document.getElementById("Reco")
    let Numeros = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    const camisa = localStorage.getItem('camisa')
    indice = 0

    while (indice < 11) {
        if (Numeros[indice] == camisa) {
            Numeros.splice(indice, 1)
        } else {
            indice = indice + 1
        } if (indice > 10) {
            Numeros.sort(() => Math.random() - 0.5)
            reco.innerHTML = `
        <article class="camisa-anime produto" id ="${Numeros[0]}" onclick="buyPage(id)">
            <div class="grid1">
                <img id="imga4" class="verso preto" src="../imgs/masculino/camisas/${Numeros[0]}-v.png" alt="OverSize Traktor">
                    <div class="classificacao">
                        <p>4.5★★★★☆</p>
                        <p style="font-size: x-small;">142</p>
                    </div>
                    <div class="descrissao">
                        <p>R$ 69,99</p>
                        <p style="text-decoration: line-through;">R$ 89,99</p>
                    </div>
            </div>
            </article >
            <article class="camisa-anime produto" id="${Numeros[2]}" onclick="buyPage(id)">
                <div class="grid1">
                    <img id="imga4" class="verso preto" src="../imgs/masculino/camisas/${Numeros[2]}-v.png" alt="OverSize Traktor">
                    <div class="classificacao">
                        <p>4.5★★★★☆</p>
                        <p style="font-size: x-small;">142</p>
                    </div>
                    <div class="descrissao">
                        <p>R$ 69,99</p>
                        <p style="text-decoration: line-through;">R$ 89,99</p>
                    </div>
                </div>
            </article>
            <article class="camisa-anime produto" id="${Numeros[4]}" onclick="buyPage(id)">
                <div class="grid1">
                    <img id="imga4" class="verso preto" src="../imgs/masculino/camisas/${Numeros[4]}-v.png" alt="OverSize Traktor">
                    <div class="classificacao">
                        <p>4.5★★★★☆</p>
                        <p style="font-size: x-small;">142</p>
                    </div>
                    <div class="descrissao">
                        <p>R$ 69,99</p>
                        <p style="text-decoration: line-through;">R$ 89,99</p>
                    </div>
                </div>
            </article>
            <article class="camisa-anime produto" id="${Numeros[6]}" onclick="buyPage(id)">
                <div class="grid1">
                    <img id="imga4" class="verso preto" src="../imgs/masculino/camisas/${Numeros[6]}-v.png" alt="OverSize Traktor">
                    <div class="classificacao">
                        <p>4.5★★★★☆</p>
                        <p style="font-size: x-small;">142</p>
                    </div>
                    <div class="descrissao">
                        <p>R$ 69,99</p>
                        <p style="text-decoration: line-through;">R$ 89,99</p>
                    </div>
                </div>
            </article>
            <article class="camisa-anime produto" id="${Numeros[8]}" onclick="buyPage(id)">
                <div class="grid1">
                    <img id="imga4" class="verso preto" src="../imgs/masculino/camisas/${Numeros[8]}-v.png" alt="OverSize Traktor">
                    <div class="classificacao">
                        <p>4.5★★★★☆</p>
                        <p style="font-size: x-small;">142</p>
                    </div>
                    <div class="descrissao">
                        <p>R$ 69,99</p>
                        <p style="text-decoration: line-through;">R$ 89,99</p>
                    </div>
                </div>
            </article>
            <article class="camisa-anime produto" id="${Numeros[5]}" onclick="buyPage(id)">
                <div class="grid1">
                    <img id="imga4" class="verso preto" src="../imgs/masculino/camisas/${Numeros[5]}-v.png" alt="OverSize Traktor">
                    <div class="classificacao">
                        <p>4.5★★★★☆</p>
                        <p style="font-size: x-small;">142</p>
                    </div>
                    <div class="descrissao">
                        <p>R$ 69,99</p>
                        <p style="text-decoration: line-through;">R$ 89,99</p>
                    </div>
                </div>
            </article>
    `
        }
    }

}