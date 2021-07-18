function fillForm(){
    var nickname = document.querySelector('#nameField').value;
    var age= document.querySelector('#ageField').value;
    localStorage.setItem("nickname",nickname);
    localStorage.setItem("age",age);
    return;
}

function characterChoice (x){
    localStorage.setItem("character",x);
    return;
}

// 1 - yellow
// 2 - blue
// 3 - green 
// 4 - grey 
// 5 - red 
