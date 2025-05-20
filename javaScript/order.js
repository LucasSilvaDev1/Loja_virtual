


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


    const img = document.getElementById("imgcS1")

    document.getElementById('Cor1').addEventListener('click', function () {

        if (img.classList.contains('preto')) {
            img.classList.remove('preto')
            img.classList.add('branco')
            img.src = ('imgs/masculino/camisas/street/camisa01-branca-frente.png')
        }
    });

    document.getElementById('Cor01').addEventListener('click', function () {
        if (img.classList.contains('branco')) {
            img.classList.remove('branco')
            img.classList.add('preto')
            img.src = ('imgs/masculino/camisas/street/camisa01-preta-frente.png')
        }
    });




    // if (img.classList.contains("imgpreta")) {
    //     img.src = ("imgs/masculino/camisas/street/camisa01-branca-frente.png")
    //     img.classList.remove("imgpreta")
    //     img.classList.add("imgbranca")

    // } else {
    //     img.src = ("imgs/masculino/camisas/street/camisa01-preta-frente.png")
    //     img.classList.remove("imgbranca")
    //     img.classList.add("imgpreta")
    // }

