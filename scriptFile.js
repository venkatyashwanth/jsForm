let name = document.getElementById("personName");
let email = document.getElementById("email");
let maleGender = document.getElementById("maleGender");
let femaleGender = document.getElementById("femaleGender");
let status = document.getElementById("status");
let phone = document.getElementById("phone");

let checkItems = {
    perName: false,
    email: false,
    gender: "male",
    status: 'employed',
    phone: false
}

name.addEventListener("blur",function(event){
    if(event.target.value.trim() == "" ){
        let nameError = document.getElementById("nameError");
        nameError.textContent ="*required";
    }else{
        nameError.textContent ="";
        let name = document.getElementById("personName");
        var regName=/^[a-zA-Z]{2,50}$/;
        if(!regName.test(name.value)){
            alert("Only alphabets are allowed and atleast length is 2");
            name.style.border = "1px solid red"
        }
        else{
            name.style.border = "1px solid #ced4da"
            checkItems.perName = true;
        }
    }
})

email.addEventListener("blur",function(event){
    let emailError = document.getElementById("mailError");
    if(event.target.value.trim() == "" ){
        emailError.textContent ="*required";
    }else{
        emailError.textContent ="";
        let em = document.getElementById("email");
        let email = document.getElementById("email").value;
        let prefix=email.substring(email.indexOf('@')+1);
       

        if(!email.includes('@') || prefix==''){
            alert("Check your email");
            em.style.border = "1px solid red";
        }
        else{
            em.style.border = "1px solid #ced4da";
            checkItems.email = true;
        }
    }
})

maleGender.addEventListener('change',function(event){
    checkItems.gender = event.target.value;
})

femaleGender.addEventListener('change',function(event){
    checkItems.gender = event.target.value;
})

status.addEventListener('change',function(event){
    checkItems.status = event.target.value;
})

phone.addEventListener('blur',function(event){
    if(event.target.value.trim() == ""){
        let phoneError = document.getElementById("phoneError");
        phoneError.textContent ="*required";
    }else{
        phoneError.textContent ="";
        let phone = document.getElementById("phone");
        let phoneNo = phone.value;

        let regExp=new RegExp("^[0-9]*$"); 
        if(regExp.test(phoneNo)==false){
            alert("Must be numbers");
            phone.style.border = "1px solid red";
            checkItems.phone = false;
        }
        else if(phoneNo.length!=10){
            alert("please put valid mobile number");
            phone.style.border = "1px solid red";
            checkItems.phone = false;
        }
        else{
            phone.style.border ="1px solid #ced4da";
            checkItems.phone = true;
        }
    }
})

function validateForm(){
    console.log(checkItems)
    if(checkItems.perName && checkItems.email && checkItems.phone){
        return true;
    }else{
        alert("Please fill all fields")
        return false;
    }
}