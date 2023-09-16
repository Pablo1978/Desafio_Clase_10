const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', async e => {
    e.preventDefault()
    const data = new FormData(loginForm)
    const obj = {}
    data.forEach((value, key) => obj[key] = value);

    const response = await fetch('/api/sessions/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": 'application/json'
        }
    })

    const result = await response.json()
    console.log(result);
})