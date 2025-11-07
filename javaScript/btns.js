
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
    const btreturn = document.getElementById('btReturn')
    btreturn.innerText = 'undo'
    menuLateral.style.display = 'none'
})

document.getElementById('openMenu').addEventListener('click', function () {
    const btreturn = document.getElementById('btReturn')
    btreturn.innerText = ''
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

// Carrinho de compra

function OpenCart() {
    const carrinho = document.getElementById('Cart')
    carrinho.style.display = 'flex'
}

function CloseCart() {
    const carrinho = document.getElementById('Cart')
    carrinho.style.display = 'none'
}

function Addsize(id) {
    const btn = document.getElementById(id)
    const size = id
    localStorage.setItem('sizecamisa', size)

    btn.style.backgroundColor = '#327e9a'
}

// div carrinho de compra

// Lê o carrinho ou retorna array vazio caso não exista
function pegarCarrinho() {
    try {
        return JSON.parse(localStorage.getItem('carrinho')) || [];
    } catch (e) {
        console.error('Erro ao ler carrinho do localStorage:', e)
        return []
    }
}

// Salva o array de carrinho no localStorage
function salvarCarrinho(carrinho) {
    try {
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    } catch (e) {
        console.error('Erro ao salvar carrinho no localStorage')
    }
}

/* ---------- Renderização do carrinho no DOM ---------- */
function renderCarrinho() {
    const divcart = document.getElementById('CartItem')
    if (!divcart) {
        console.warn('Container #CartItem não encontrado no DOM')
        return
    }


    const carrinho = pegarCarrinho()
    divcart.innerHTML = ''

    if (carrinho.length === 0) {
        divcart.innerHTML = '<p class="vazio">Seu Carrinho está vazio.</p>';
        atualizarContadorCarrinho()
        return
    }

    carrinho.forEach((item, index) => {
        const itemHTML = document.createElement('div')
        itemHTML.className = 'itemCart'
        itemHTML.innerHTML = `
        <img class="imgCart" src="${item.imagem}" alt="${item.nome}">
        <p class="DeskCartItem">${item.nome}</p>
        <p class ="SizeItem">${item.tamanho}</p>
        <button class="ReduCart" data-index="${index}" title="Remover 1">-</button> 
        <p class="quantiCart">${item.quantidade}</p>
        <button class="AdiCart" data-index="${index}">+</button>  
        `;
        divcart.appendChild(itemHTML)
    })

    ativarBotoesCarrinho(); // liga os listeners aos botões recém-criados
    atualizarContadorCarrinho();
}
function ativarBotoesCarrinho() {
    const carrinho = pegarCarrinho()

    document.querySelectorAll('.AdiCart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(btn.dataset.index);
            if (Number.isInteger(idx) && carrinho[idx]) {
                carrinho[idx].quantidade += 1
                salvarCarrinho(carrinho)
                renderCarrinho()
            }
        })
    })

    document.querySelectorAll('.ReduCart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(btn.dataset.index)
            if (Number.isInteger(idx) && carrinho[idx]) {
                if (carrinho[idx].quantidade > 1) {
                    carrinho[idx].quantidade -= 1
                } else {
                    carrinho.splice(idx, 1)
                }
                salvarCarrinho(carrinho)
                renderCarrinho()
            }
        })
    })
}

function atualizarContadorCarrinho() {
    const contador = document.getElementById('contadorCarrinho')
    if (!contador) return;
    const carrinho = pegarCarrinho()
    const total = carrinho.reduce((acc, it) => acc + (it.quantidade || 0), 0)
    contador.textContent = total;
}

function AddToCart() {
    const size = localStorage.getItem('sizecamisa')
    const quantidade = document.getElementById('NumCart').placeholder
    const camisa = localStorage.getItem('camisa')

    if (!size || !camisa) {
        alert('Selecione um tamanho e um produto antes.')
        return
    }

    const id = `${camisa}-${size}`

    const produto = {
        id,
        nome: "Oversized-Goku",
        imagem: `../imgs/masculino/camisas/${camisa}-f.png`,
        tamanho: size,
        quantidade: quantidade
    }

    const carrinho = pegarCarrinho()

    const idxExistente = carrinho.findIndex(it => it.id === produto.id)
    if (idxExistente > -1) {
        carrinho[idxExistente].quantidade += produto.quantidade
    } else {
        carrinho.push(produto)
    }

    salvarCarrinho(carrinho)
    renderCarrinho()

    if (typeof CloseDivCart === 'function') CloseDivCart();
    if (typeof OpenCart === 'function') OpenCart()
}
function CloseDivCart() {
    const cart = document.getElementById("DivCartshop")
    cart.style.display = 'none'
}

function OpenDivCart() {
    const cart = document.getElementById("DivCartshop")
    cart.style.display = 'block'
    localStorage.removeItem('sizecamisa')
}

window.addEventListener('DOMContentLoaded', () => {
    renderCarrinho()
})

//     document.getElementById('adiQuant').addEventListener('click', function (){
//             const quantidade = document.getElementById('NumCart')
//             let numQuant = Number(quantidade.placeholder)
//             if (quantidade.placeholder <= 100){
//                 numQuant++
//                 quantidade.placeholder = numQuant
//             }

//     })
//     document.getElementById('reduQuant').addEventListener('click', function(){
//         const quantidade = document.getElementById('NumCart')
//         let numQuant = Number(quantidade.placeholder)
//         if (quantidade.placeholder >= 1){
//             numQuant--
//             quantidade.placeholder = numQuant
//         }
//     })




// function AddToCart(){
//     const size = localStorage.getItem('sizecamisa')
//     const quantidade = Number(document.getElementById('NumCart').placeholder || 1)
//     const camisa = localStorage.getItem('camisa')
//     const divcart = document.getElementById('CartItem')
//     const descrisao = localStorage.getItem('descrisao')

//     if (!size || !camisa){
//         alert('Selecione um tamanho e um produto antes.')
//     }

//     divcart.innerHTML += `
//              <div class="itemCart">
//                 <img class="imgCart" src="../imgs/masculino/camisas/${camisa}-f.png" alt="">
//                 <p id="DeskCartItem">${descrisao}</p>
//                 <p id="SizeItem">${size}</p>
//                 <button id="ReduCart" title="Remover produto?">-</button>
//                 <p id="quantiCart">${quantidade}</p>
//                 <button id="AdiCart">+</button>
//             </div>
//     `
//     CloseDivCart()
//     OpenCart()
// }
// redirecionamento para paginas de compra

function buyPage(id) {
    const descrisao = document.getElementById("img" + id)
    localStorage.setItem('descrisao', descrisao.alt)
    const camisa = id
    localStorage.setItem('camisa', camisa)
    window.location.href = 'pagCompra.html'
    // console.log(localStorage.getItem('descrisao'))
}

function buyPageReload(id) {
    const camisa = id
    const descrisao = document.getElementById("img" + id)
    localStorage.removeItem('camisa', camisa)
    localStorage.setItem('camisa', camisa)
    localStorage.removeItem('descrisao')
    localStorage.setItem('descrisao', descrisao.alt)
    window.location.href = 'pagCompra.html'
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
        valor - 100
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
        <article class="camisa-anime produto" id ="${Numeros[0]}" onclick="buyPageReload(id)">
            <div class="grid1">
                <img id="img${Numeros[0]}" class="verso preto" src="../imgs/masculino/camisas/${Numeros[0]}-v.png" alt="OverSize Traktor">
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
            <article class="camisa-anime produto" id="${Numeros[2]}" onclick="buyPageReload(id)">
                <div class="grid1">
                    <img id="img${Numeros[2]}" class="verso preto" src="../imgs/masculino/camisas/${Numeros[2]}-v.png" alt="OverSize Traktor">
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
            <article class="camisa-anime produto" id="${Numeros[4]}" onclick="buyPageReload(id)">
                <div class="grid1">
                    <img id="img${Numeros[4]}" class="verso preto" src="../imgs/masculino/camisas/${Numeros[4]}-v.png" alt="OverSize Traktor">
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
            <article class="camisa-anime produto" id="${Numeros[6]}" onclick="buyPageReload(id)">
                <div class="grid1">
                    <img id="img${Numeros[6]}" class="verso preto" src="../imgs/masculino/camisas/${Numeros[6]}-v.png" alt="OverSize Traktor">
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
            <article class="camisa-anime produto" id="${Numeros[8]}" onclick="buyPageReload(id)">
                <div class="grid1">
                    <img id="img${Numeros[8]}" class="verso preto" src="../imgs/masculino/camisas/${Numeros[8]}-v.png" alt="OverSize Traktor">
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
            <article class="camisa-anime produto" id="${Numeros[5]}" onclick="buyPageReload(id)">
                <div class="grid1">
                    <img id="img${Numeros[5]}" class="verso preto" src="../imgs/masculino/camisas/${Numeros[5]}-v.png" alt="OverSize Traktor">
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
            <article class="camisa-anime produto" id="${Numeros[1]}" onclick="buyPageReload(id)">
                <div class="grid1">
                    <img id="img${Numeros[1]}" class="verso preto" src="../imgs/masculino/camisas/${Numeros[1]}-v.png" alt="OverSize Traktor">
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
            <article class="camisa-anime produto" id="${Numeros[3]}" onclick="buyPageReload(id)">
                <div class="grid1">
                    <img id="img${Numeros[3]}" class="verso preto" src="../imgs/masculino/camisas/${Numeros[3]}-v.png" alt="OverSize Traktor">
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