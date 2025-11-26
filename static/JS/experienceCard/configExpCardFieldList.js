function configExpCardFieldList(cardField,value){
  const fieldHeader=cardField.querySelector("h4")
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

function generateFieldListname(cardField){
  const fieldHeader=cardField.querySelector("h4")
  let name=fieldHeader.innerText
  if(cardField.className==="cardFieldList") 
    name=name.charAt(0).toLowerCase() + name.slice(1);
  else
    name=name.toLowerCase()
  return name.replace(" ","")
}