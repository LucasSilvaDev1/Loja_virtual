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
