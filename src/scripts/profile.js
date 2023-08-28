function renderHeader() {
    //selecionando o body
    const body = document.querySelector('body')

    // header profile page
    const header = document.createElement('header')
    const divImg = document.createElement('div')
    const avatar = document.createElement('img')
    const name = document.createElement('h1')
    const userBtn = document.createElement('button')
    
    //pegando user no localStorage
    const user = JSON.parse(localStorage.getItem('user'))
    
    //nomeando classes
    name.classList.add('title-1')

    // header profile page
    name.innerText = user.name
    avatar.src = user.avatar_url
    userBtn.innerText = 'Trocar de usuário'

    // voltar para pagina incial e consultar outro usuario
    userBtn.addEventListener('click', () => {
        localStorage.removeItem('user')
        location.replace('../../index.html')
    })

    console.log(user)
    //adicionando ao body
    divImg.append(avatar, name)
    header.append(divImg, userBtn)
    body.appendChild(header)
}


async function renderRepos() {
    const user = JSON.parse(localStorage.getItem('user'))
    const userUrl = user.repos_url

    const reposUser = await fetch(`${userUrl}`,{
        method: 'GET'
    })

    .then(response => response.json())

    const body = document.querySelector('body')
    const ul = document.createElement('ul')
    body.appendChild(ul)

    reposUser.forEach(repos => {
        const li = document.createElement('li')
        const h1 = document.createElement('h1')
        const description = document.createElement('p')
        const linkRespo = document.createElement('a')

        h1.innerText = repos.name
        description.innerText = repos.description
        linkRespo.href = repos.html_url
            
        linkRespo.innerText = 'Repositório'


        li.append(h1, description, linkRespo)
        ul.appendChild(li)
    })
}


renderHeader()
renderRepos()