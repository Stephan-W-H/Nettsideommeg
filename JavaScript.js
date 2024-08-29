
function setrandomsrc(imgElement){
    let randomnum = Math.floor(Math.random() * 4); 


    if(randomnum ==0){
        imgElement.src = 'Meg1.JPG'
    }
    
    else if(randomnum ==1){
        imgElement.src = 'Meg2.JPG'
    }
     
    else if(randomnum ==2){
        imgElement.src = 'Meg3.JPG'
    }

    else{
        imgElement.src = 'Meg+4.JPG'
    }
}

function changecolor(){
    document.body.style.background="cadetblue";
}