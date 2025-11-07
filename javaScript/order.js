

function mudarCamisa(id) {
    const img = document.getElementById('img' + id)
    const article = document.getElementById(id)
    article.addEventListener('mouseenter', function () {
        img.src = ('../imgs/masculino/camisas/' + id + '-v.png')

    })
    article.addEventListener('mouseleave', function () {
        img.src = ('../imgs/masculino/camisas/' + id + '-f.png')
    })
}
