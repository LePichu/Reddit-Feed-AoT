const root = document.querySelector('#root')

const fetchImages = () => {
    fetch(`${window.location.href}images.json`).then(x => {
        return x.json()
    }).then(x => {
        x.images.forEach(x => {
            root.innerHTML += `<img src="${x}"><br>`
        })
    })
}

fetchImages()