
const search = document.getElementById('search')

const busca = document.getElementById('busca').addEventListener('click', function () {
    search.style.display = 'block'
    search.focus(search)

})


search.addEventListener('focus', () => {
    if (search.classList.contains('off')) {
        search.classList.replace('off', 'on')
        search.style.display = 'block'
    }
})
search.addEventListener('blur', () => {
    if (search.classList.contains('on')) {
        search.classList.replace('on', 'off')
        search.style.display = 'none'
    }
})



