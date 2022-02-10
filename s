let name = document.getElementById("personName");
let email = document.getElementById("email");

name.addEventListener("blur",function(event){
    if(event.target.value == "" ){
        let nameError = document.getElementById("nameError");
        nameError.textContent ="*required";
    }else{
        nameError.textContent ="";
    }
})

email.addEventListener("blur",function(event){
    if(event.target.value == "" ){
        let emailError = document.getElementById("mailError");
        emailError.textContent ="*required";
    }else{
        emailError.textContent ="";
    }
})

function checkName(){
    let name = document.getElementById("personName");
    if(name.value.trim() == ""){
        alert("Check all fields");
        return false
    }
    else
    {
        var regName=/^[a-zA-Z]{2,50}$/;
        if(!regName.test(name.value)){
            alert("Only alphabets are allowed and atleast length is 2");
            return false
        }
        else
        {
            true
        }
    }
}

function checkEmail(){
    let email = document.getElementById("email");
    if(email.value.trim() == ""){
        alert("Check all fields");
        return false
    }
    else
    {
        var regEmail=/^[a-zA-Z]{5,50}$/;
        if(!regName.test(email.value)){
            alert("Check you email");
            return false
        }
        else
        {
            true
        }
    }
}



function checkForm(){
   
    if(checkName() && checkEmail()){
        return true
    }else{
        return false
    }
}

function validateForm(){
    return checkForm()
}