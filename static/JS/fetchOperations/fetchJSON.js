async function fecthJSON(endpoint='/static/JSON/info.json'){
  const response=await fetch(endpoint)
  return await response.json()
}