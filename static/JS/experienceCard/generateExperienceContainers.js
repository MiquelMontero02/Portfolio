async function generateContainers(data){
  const experienceSection=document.querySelector(".section1")
  const container=document.createElement("div")
  const experienceData=data.experience
  const cardTemplate=await fetchFile()

  experienceData.forEach(async experienceRegister=>{
    container.className="container"
    container.innerHTML=cardTemplate

    const cardFields=container.querySelectorAll(".cardField,.cardFieldList")

    cardFields.forEach(cardField=>{
      const key=generateFieldListname(cardField)
      const value = experienceRegister[key]
      if(typeof(value)==='object'){
        configExpCardFieldList(cardField,value)
      }else{
        cardField.querySelector("p").innerHTML=value
      }     
    })
  })
  experienceSection.appendChild(container)
}