async function fetchFile(endpoint='/static/pages/elements/ExpCard.html'){
  const response=await fetch(endpoint)
  return await response.text()
}