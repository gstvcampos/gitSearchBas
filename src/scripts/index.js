const baseUrl = 'https://api.github.com/users/'

export async function getUser(username) {
    const getUser = await fetch(`${baseUrl}${username}`,{
        method: 'GET'
    })

    .then(response => response.json())
    
    return getUser
}


function checkUser() {
    const btn = document.querySelector('.submit')
    const input = document.querySelector('.input-user')

    btn.addEventListener('click', async () => {
        const user = await getUser(input.value)

        if (user.message === 'Not Found') {
            location.replace('./src/pages/error.html')
        } else {
            const jsonStr = JSON.stringify(user)
            localStorage.setItem('user', jsonStr)

            location.replace('./src/pages/profile.html ')
        }

    })
}

checkUser()