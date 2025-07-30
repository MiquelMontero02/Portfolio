async function fecthJSON(){
  const response=await fetch('/static/JSON/info.json')
  return await response.json()
}

async function fecthCardTemplate(){
  const response=await fetch('/static/HTML/experienceCardTemplate.html')
  return await response.text()
}

async function generateContainers(data){
  const experienceSection=document.querySelector(".section1")
  const container=document.createElement("div")
  
  const experienceData=data.experience

  experienceData.forEach(async experienceRegister=>{
    container.className="container"
    container.innerHTML=await fecthCardTemplate()

    const cardFields=container.querySelectorAll(".cardField,.cardFieldList")

    cardFields.forEach(cardField=>{
      const fieldHeader=cardField.querySelector("h4")
      const rawKeyName=fieldHeader.innerText
      const key=generateFieldListname(rawKeyName,cardField.className==="cardFieldList")
      const value = experienceRegister[key]
      if(typeof(value)==='object'){
        configureCardFieldList(cardField,fieldHeader,value)
      }else{
        cardField.querySelector("p").innerHTML=value
      }     
    })
  })
  experienceSection.appendChild(container)
}

function configureCardFieldList(cardField,fieldHeader,value){
    const informationList=cardField.querySelector("ul")
    fieldHeader.addEventListener("click",()=>$(informationList).slideToggle())
    value.forEach(item=>{
      const listElement=document.createElement("li")
      listElement.innerHTML=item
      if(typeof(item)==='object'){
        configureComplexField(Object.values(item),listElement)
      }
      informationList.appendChild(listElement)
    })
}

function configureComplexField(objectFieldValues,listElement){
  listElement.innerHTML=`- ${objectFieldValues[0]}`
  if(objectFieldValues.length>1){
    listElement.innerHTML+=`(<a href="${objectFieldValues[1]}">Documentation</a>)`
  }
      
}

function generateFieldListname(rawName,isList){
  let name=rawName.toLocaleLowerCase()
  if(isList) 
    name=rawName.charAt(0).toLowerCase() + rawName.slice(1);
  return name.replace(" ","")
}

document.addEventListener("DOMContentLoaded",async ()=>{
  generateContainers(await fecthJSON())
})

