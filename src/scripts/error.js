function returnSeach() {
    const btn = document.querySelector('button')

    btn.addEventListener('click', () => {
        localStorage.removeItem('user')
        location.replace('../../index.html')
    })
}

returnSeach()