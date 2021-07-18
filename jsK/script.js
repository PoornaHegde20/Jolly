/*DETAILS PAGE*/

function fillForm(){
    var nickname = document.querySelector('#nameField').value;
    var age= document.querySelector('#ageField').value;
    localStorage.setItem("nickname",nickname);
    localStorage.setItem("age",age);
    return;
}

function characterChoice (x){
    localStorage.setItem("character",x);
    displayChoice();
    return;
}

// 1 - yellow
// 2 - blue
// 3 - green 
// 4 - grey 
// 5 - red 

function displayChoice(){
    var c=localStorage.getItem("character");
    var colour;
    if(c==1)
        colour="YELLOW";
    else if(c==2)
        colour="BLUE";  
    else if(c==3)
        colour="GREEN"; 
    else if(c==4)
        colour="GREY";
    else if(c==5)
        colour="RED";
    else
    {
        localStorage.setItem("character",1);
        colour="YELLOW";
    }

    document.querySelector("#choice-display").innerHTML = "You have chosen "+colour+"!";
    return;
}

/* HOMEPAGE */

function iconChoice(){
    var c=localStorage.getItem("character");
    if(c==1)
        return "imagesK/yellow.png";
    else if(c==2)
        return "imagesK/blue.png"; 
    else if(c==3)
        return "imagesK/green.png"; 
    else if(c==4)
        return "imagesK/grey.png";
    else if(c==5)
        return "imagesK/red.png";

}