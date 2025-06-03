

function windowSearch() {
    let search = document.getElementById('search')
    if (search.classList.contains('off')) {
        search.classList.replace('off', 'on')
        search.style.display = 'block'
        search.focus(search)
    } else {
        search.classList.replace('on', 'off')
        search.style.display = 'none'
    }
}