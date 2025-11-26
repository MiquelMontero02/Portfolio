function setLinks(linkList){
    linkList.forEach(({app, url}) => {
        let element=document.getElementById(app);
        if(element)
            element.href = url;
    });
}