const tittle=document.querySelector("h1")
const response=await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
const parsedResponse=await response.json()

tittle.innerText=parsedResponse.name
