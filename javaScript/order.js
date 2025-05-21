


// função para reorganizar o conteudo da seção dos kits
checkScreensize();

window.addEventListener('resize', checkScreensize);

function checkScreensize() {
    const width = window.innerWidth
    const height = window.innerHeight

    let divkit = document.getElementById('divkit')

    if (width <= 580) {
        divkit.innerHTML = `
        <div class="textos">
                    <h3 class="titulo item"> Kits em promoção por tempo limitado
                    </h3>
                    <img id="imgkit" class="img-kit item" src="imgs/kits/kit-ma01.jpg" alt="">
                    <p>opções disponíveis:</p>
                    <div class="btnsKit">
                        <button id="btkit1" class="kit1" onclick="bkit1()">1</button>
                        <button id="btkit2" class="kit2" onclick="kit2()"></button>
                        <button id="btkit3" class="kit3" onclick="kit3()"></button>
                        <button id="btkit4" class="kit4" onclick="kit4()"></button>
                    </div>
                    <div class="classificacao">
                        <p>4.5★★★★☆</p>
                        <p style="font-size: x-small;">235</p>
                    </div>
                    <div class="descrissao">
                        <p>R$ 169,99</p>
                        <p style="text-decoration: line-through;">R$ 199,99</p>
                    </div>
                </div>   
        `
        divkit.style.height = '450px'

    } else {
        divkit.innerHTML = `<div class="textos">
                    <h3 class="titulo item"> Kits em promoção por tempo limitado
                    </h3>
                    <p>opções disponíveis:</p>
                    <div class="btnsKit">
                        <button id="btkit1" class="kit1" onclick="bkit1()">1</button>
                        <button id="btkit2" class="kit2" onclick="kit2()"></button>
                        <button id="btkit3" class="kit3" onclick="kit3()"></button>
                        <button id="btkit4" class="kit4" onclick="kit4()"></button>
                    </div>
                    <div class="classificacao">
                        <p>4.5★★★★☆</p>
                        <p style="font-size: x-small;">235</p>
                    </div>
                    <div class="descrissao">
                        <p>R$ 169,99</p>
                        <p style="text-decoration: line-through;">R$ 199,99</p>
                    </div>
                </div>
                <img id="imgkit" class="img-kit item" src="imgs/kits/kit-ma01.jpg" alt="">`

        divkit.style.height = '225px'
    }
}


//funcionalidade dos botões da seção dos kits 

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

// funções de trocar imagens dos articles;

// primeira seção de articles

// article 1



let img = document.getElementById("imgcS1")
let img1 = document.getElementById('img1')
let img01 = document.getElementById('img01')

document.getElementById('img1').addEventListener('click', function () {

    if (img.classList.contains('branco')) {
        if (img.classList.contains('verso')) {
            img.classList.replace('verso', 'frente')
            img.src = 'imgs/masculino/camisas/street/camisa01-branca-frente.png'
        }
    } if (img.classList.contains('preto')) {
        if (img.classList.contains('verso')) {
            img.classList.replace('verso', 'frente')
            img.src = 'imgs/masculino/camisas/street/camisa01-preta-frente.png'
        }
    }

})

document.getElementById('img01').addEventListener('click', function () {

    if (img.classList.contains('branco')) {
        if (img.classList.contains('frente')) {
            img.classList.replace('frente', 'verso')
            img.src = 'imgs/masculino/camisas/street/camisa01-branca-verso.png'
        }
    } if (img.classList.contains('preto')) {
        if (img.classList.contains('frente')) {
            img.classList.replace('frente', 'verso')
            img.src = 'imgs/masculino/camisas/street/camisa01-preta-verso.png'
        }
    }
})



document.getElementById('Cor1').addEventListener('click', function () {

    if (img.classList.contains('preto')) {

        img.classList.remove('preto')
        img.classList.add('branco')

        img.src = 'imgs/masculino/camisas/street/camisa01-branca-frente.png'
        img1.src = 'imgs/masculino/camisas/street/camisa01-branca-frente.png'
        img01.src = 'imgs/masculino/camisas/street/camisa01-branca-verso.png'
    }
});

document.getElementById('Cor01').addEventListener('click', function () {
    if (img.classList.contains('branco')) {



        img.classList.remove('branco')
        img.classList.add('preto')

        img.src = 'imgs/masculino/camisas/street/camisa01-preta-frente.png'
        img1.src = 'imgs/masculino/camisas/street/camisa01-preta-frente.png'
        img01.src = 'imgs/masculino/camisas/street/camisa01-preta-verso.png'
    }
});

// article 2 

const img2 = document.getElementById('img2')

document.getElementById('cor2').addEventListener('click', function () {
    img2.src = 'imgs/masculino/camisas/street/camisa02-preta.png'
})
document.getElementById('cor02').addEventListener('click', function () {
    img2.src = "imgs/masculino/camisas/street/camisa02-branca.png"
})
document.getElementById('cor002').addEventListener('click', function () {
    img2.src = 'imgs/masculino/camisas/street/camisa02-vermelha.png'
})

// article 3

let img3 = document.getElementById('imgcS3')
let img03 = document.getElementById('img3')
let img003 = document.getElementById('img03')

document.getElementById('img3').addEventListener('click', function () {

    if (img3.classList.contains('vermelho')) {
        if (img3.classList.contains('verso')) {
            img3.classList.replace('verso', 'frente')
            img3.src = 'imgs/masculino/camisas/street/camisa03-vermelha-frente.png'
        }
    } if (img3.classList.contains('preto')) {
        if (img3.classList.contains('verso')) {
            img3.classList.replace('verso', 'frente')
            img3.src = 'imgs/masculino/camisas/street/camisa03-preta-frente.png'
        }
    }

})

document.getElementById('img03').addEventListener('click', function () {

    if (img3.classList.contains('vermelho')) {
        if (img3.classList.contains('frente')) {
            img3.classList.replace('frente', 'verso')
            img3.src = 'imgs/masculino/camisas/street/camisa03-vermelha-verso.png'
        }
    }
     if (img3.classList.contains('preto')) {
        if (img3.classList.contains('frente')){
            img3.classList.replace('frente', 'verso')
            img3.src = 'imgs/masculino/camisas/street/camisa03-preta-verso.png'
        }
    }

})

document.getElementById('cor3').addEventListener('click', function () {
    if (img3.classList.contains('preto')) {
        img3.classList.replace('preto', 'vermelho')

        img3.src = 'imgs/masculino/camisas/street/camisa03-vermelha-frente.png'
        img03.src = 'imgs/masculino/camisas/street/camisa03-vermelha-frente.png'
        img003.src = 'imgs/masculino/camisas/street/camisa03-vermelha-verso.png'
    }
})

document.getElementById('cor03').addEventListener('click', function () {
    if (img3.classList.contains('vermelho')) {
        img3.classList.replace('vermelho', 'preto')

        img3.src = 'imgs/masculino/camisas/street/camisa03-preta-frente.png'
        img03.src = 'imgs/masculino/camisas/street/camisa03-preta-frente.png'
        img003.src = 'imgs/masculino/camisas/street/camisa03-preta-verso.png'
    }
})

    // article 4
    let img4 = document.getElementById('img4')

    document.getElementById('cor4').addEventListener('click', function (){
        img4.src = 'imgs/masculino/camisas/street/camisa04-branca.png'
    })
     
    document.getElementById('cor04').addEventListener('click', function (){
        img4.src = 'imgs/masculino/camisas/street/camisa04-preta.png'
    })
    
    
    
    
    // if (img.classList.contains("imgpreta")) {
//     img.src = ("imgs/masculino/camisas/street/camisa01-branca-frente.png")
//     img.classList.remove("imgpreta")
//     img.classList.add("imgbranca")

// } else {
//     img.src = ("imgs/masculino/camisas/street/camisa01-preta-frente.png")
//     img.classList.remove("imgbranca")
//     img.classList.add("imgpreta")
// }

