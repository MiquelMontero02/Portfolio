document.addEventListener("DOMContentLoaded",async ()=>{
  let data= await fecthJSON()
  generateContainers(data)
  setLinks(data.links)
})

