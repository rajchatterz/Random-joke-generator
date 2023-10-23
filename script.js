const setup = document.getElementById('setup')
const delivery = document.getElementById('delivery')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=twopart'

fetch(url).then(res => {
    if (!res.ok) {
        throw new Error(`Http error! status: ${res.error}`)
    }
    return res.json()
}).then(data => {
    const joke = data.setup
    const ans = data.delivery
    setup.innerHTML = joke
    delivery.innerHTML=ans
}).catch(error => {
    console.log(error)
})