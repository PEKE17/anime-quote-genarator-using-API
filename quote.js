const animeTitle = document.getElementById('anime-title')
const characterName = document.getElementById('character-name')
const quote = document.getElementById('quote')
const button = document.getElementById('btn')

button.addEventListener('click', getQuote)

getQuote()

function getQuote(){
  fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(animeApi => {
      animeTitle.innerHTML = `${animeApi.anime}`
      characterName.innerHTML =` ${animeApi.character}`
      quote.innerHTML = `${animeApi.quote}`
    })
}


