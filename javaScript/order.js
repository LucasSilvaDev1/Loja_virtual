




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
        if (img3.classList.contains('frente')) {
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

document.getElementById('cor4').addEventListener('click', function () {
    img4.src = 'imgs/masculino/camisas/street/camisa04-branca.png'
})

document.getElementById('cor04').addEventListener('click', function () {
    img4.src = 'imgs/masculino/camisas/street/camisa04-preta.png'
})

// segunda seção de articles 

//  Article 1

let imgA = document.getElementById('imgA1')
let imgA1 = document.getElementById('imgA01')
let imgA01 = document.getElementById('imgA001')

document.getElementById('imgA01').addEventListener('click', function () {
    if (imgA.classList.contains('preto')) {
        if (imgA.classList.contains('verso')) {
            imgA.classList.replace('verso', 'frente')
            imgA.src = 'imgs/masculino/camisas/anime/anime01-black.png'
        }
    }
    if (imgA.classList.contains('branco')) {
        if (imgA.classList.contains('verso')) {
            imgA.classList.replace('verso', 'frente')
            imgA.src = 'imgs/masculino/camisas/anime/anime01-white.png'
        }
    }
})

document.getElementById('imgA001').addEventListener("click", function () {
    if (imgA.classList.contains('preto')) {
        if (imgA.classList.contains('frente')) {
            imgA.classList.replace('frente', 'verso')
            imgA.src = 'imgs/masculino/camisas/anime/anime01black.png'
        }
    }
    if (imgA.classList.contains('branco')) {
        if (imgA.classList.contains('frente')) {
            imgA.classList.replace('frente', 'verso')
            imgA.src = 'imgs/masculino/camisas/anime/anime01white.png'
        }
    }
})

document.getElementById('corA1').addEventListener('click', function () {
    if (imgA.classList.contains('preto')) {
        imgA.classList.replace('preto', 'branco')
        imgA.src = 'imgs/masculino/camisas/anime/anime01white.png'
        imgA1.src = 'imgs/masculino/camisas/anime/anime01-white.png'
        imgA01.src = 'imgs/masculino/camisas/anime/anime01white.png'
    }
})

document.getElementById('corA01').addEventListener('click', function () {
    if (imgA.classList.contains('branco')) {
        imgA.classList.replace('branco', 'preto')
        imgA.src = 'imgs/masculino/camisas/anime/anime01black.png'
        imgA1.src = 'imgs/masculino/camisas/anime/anime01-black.png'
        imgA01.src = 'imgs/masculino/camisas/anime/anime01black.png'
    }
})

// article 2


let imgAA = document.getElementById('imgA2')
let imgA2 = document.getElementById('imgA02')
let imgA02 = document.getElementById('imgA002')

document.getElementById('imgA02').addEventListener('click', function () {
    if (imgAA.classList.contains('branco')) {
        if (imgAA.classList.contains('verso')) {
            imgAA.classList.replace('verso', 'frente')
            imgAA.src = 'imgs/masculino/camisas/anime/anime02-white.png'
        }
    }
    if (imgAA.classList.contains('preto')) {
        if (imgAA.classList.contains('verso')) {
            imgAA.classList.replace('verso', 'frente')
            imgAA.src = 'imgs/masculino/camisas/anime/anime02-black.png'
        }
    }
})
document.getElementById('imgA002').addEventListener('click', function () {
    if (imgAA.classList.contains('branco')) {
        if (imgAA.classList.contains('frente')) {
            imgAA.classList.replace('frente', 'verso')
            imgAA.src = 'imgs/masculino/camisas/anime/anime02white.png'
        }
    }
    if (imgAA.classList.contains('preto')) {
        if (imgAA.classList.contains('frente')) {
            imgAA.classList.replace('frente', 'verso')
            imgAA.src = 'imgs/masculino/camisas/anime/anime02black.png'
        }
    }
})
document.getElementById('corA2').addEventListener('click', function () {
    if (imgAA.classList.contains('preto')) {
        imgAA.classList.replace('preto', 'branco')
        imgAA.src = 'imgs/masculino/camisas/anime/anime02white.png'
        imgA2.src = 'imgs/masculino/camisas/anime/anime02-white.png'
        imgA02.src = 'imgs/masculino/camisas/anime/anime02white.png'
    }
})
document.getElementById('corA02').addEventListener('click', function () {
    if (imgAA.classList.contains('branco')) {
        imgAA.classList.replace('branco', 'preto')
        imgAA.src = 'imgs/masculino/camisas/anime/anime02black.png'
        imgA2.src = 'imgs/masculino/camisas/anime/anime02-black.png'
        imgA02.src = 'imgs/masculino/camisas/anime/anime02black.png'
    }
})

// article 3

let imgAAA = document.getElementById('imgA3')
let imgA3 = document.getElementById('imgA03')
let imgA03 = document.getElementById('imgA003')

document.getElementById('imgA03').addEventListener('click', function () {
    if (imgAAA.classList.contains('marrom')) {
        if (imgAAA.classList.contains('verso')) {
            imgAAA.classList.replace('verso', 'frente')
            imgAAA.src = 'imgs/masculino/camisas/anime/anime03-brown.png'
        }
    }
    if (imgAAA.classList.contains('branco')) {
        if (imgAAA.classList.contains('verso')) {
            imgAAA.classList.replace('verso', 'frente')
            imgAAA.src = 'imgs/masculino/camisas/anime/anime03-white.png'
        }
    }
})
document.getElementById('imgA003').addEventListener('click', function () {
    if (imgAAA.classList.contains('marrom')) {
        if (imgAAA.classList.contains('frente')) {
            imgAAA.classList.replace('frente', 'verso')
            imgAAA.src = 'imgs/masculino/camisas/anime/anime03brown.png'
        }
    }
    if (imgAAA.classList.contains('branco')) {
        if (imgAAA.classList.contains('frente')) {
            imgAAA.classList.replace('frente', 'verso')
            imgAAA.src = 'imgs/masculino/camisas/anime/anime03white.png'
        }
    }
})
document.getElementById('corA3').addEventListener('click', function () {
    if (imgAAA.classList.contains('branco')) {
        imgAAA.classList.replace('branco', 'marrom')
        imgAAA.src = 'imgs/masculino/camisas/anime/anime03brown.png'
        imgA3.src = 'imgs/masculino/camisas/anime/anime03-brown.png'
        imgA03.src = 'imgs/masculino/camisas/anime/anime03brown.png'
    }
})
document.getElementById('corA03').addEventListener('click', function () {
    if (imgAAA.classList.contains('marrom')) {
        imgAAA.classList.replace('marrom', 'branco')
        imgAAA.src = 'imgs/masculino/camisas/anime/anime03white.png'
        imgA3.src = 'imgs/masculino/camisas/anime/anime03-white.png'
        imgA03.src = 'imgs/masculino/camisas/anime/anime03white.png'
    }
})

// article 4 

let imgAAAA = document.getElementById('imgA4')
let imgA4 = document.getElementById('imgA04')
let imgA04 = document.getElementById('imgA004')

document.getElementById('imgA04').addEventListener('click', function () {
    if (imgAAAA.classList.contains('preto')) {
        if (imgAAAA.classList.contains('verso')) {
            imgAAAA.classList.replace('verso', 'frente')
            imgAAAA.src = 'imgs/masculino/camisas/anime/anime04-black.png'
        }
    }

    if (imgAAAA.classList.contains('branco')) {
        if (imgAAAA.classList.contains('verso')) {
            imgAAAA.classList.replace('verso', 'frente')
            imgAAAA.src = 'imgs/masculino/camisas/anime/anime04-white.png'
        }
    }
})

document.getElementById('imgA004').addEventListener('click', function () {
    if (imgAAAA.classList.contains('preto')) {
        if (imgAAAA.classList.contains('frente')) {
            imgAAAA.classList.replace('frente', 'verso')
            imgAAAA.src = 'imgs/masculino/camisas/anime/anime04black.png'
        }
    }

    if (imgAAAA.classList.contains('branco')) {
        if (imgAAAA.classList.contains('frente')) {
            imgAAAA.classList.replace('frente', 'verso')
            imgAAAA.src = 'imgs/masculino/camisas/anime/anime04white.png'
        }
    }
})
document.getElementById('corA4').addEventListener('click', function () {
    if (imgAAAA.classList.contains('branco')) {
        imgAAAA.classList.replace('branco', 'preto')
        imgAAAA.src = 'imgs/masculino/camisas/anime/anime04black.png'
        imgA4.src = 'imgs/masculino/camisas/anime/anime04-black.png'
        imgA04.src = 'imgs/masculino/camisas/anime/anime04black.png'
    }
})
document.getElementById('corA04').addEventListener('click', function () {
    if (imgAAAA.classList.contains('preto')) {
        imgAAAA.classList.replace('preto', 'branco')
        imgAAAA.src = 'imgs/masculino/camisas/anime/anime04white.png'
        imgA4.src = 'imgs/masculino/camisas/anime/anime04-white.png'
        imgA04.src = 'imgs/masculino/camisas/anime/anime04white.png'
    }
})