const form=document.getElementById("form");
const submit=document.getElementById("submit");

document.addEventListener('DOMContentLoaded',function(){
    const items=document.querySelectorAll(".dropdown-item");
    const phone=document.getElementById("phone");
    items.forEach(function(item){
        item.addEventListener('click',function(){
            const country_code=this.getAttribute('data-code');
            phone.value=country_code;
        })
    })
});



submit.addEventListener("click", (e) =>{

    e.preventDefault(); //prevent form from submitting
    const fname=document.getElementById("fname");
    const lname=document.getElementById("lname");
    const email=document.getElementById("floatingInput");
    const address=document.getElementById("floatingTextarea2");
    
    const password=document.getElementById("floatingPassword");
    const confirm_password=document.getElementById("confirmPassword");

    if(fname.value.length<5 || lname.value.length <5){
        alert("First and Last name should be atleast 5 characters long!!");
    }

    if(phone.value.length<13 || phone.value.length>13){
        alert("Phone number should be less than 10!!");
    }
    if(phone.value.substring(3,phone.value.length) == "123456789"){
        alert("Please Enter a different phone number!!");
    }
    
    if(email.value.includes("@") == false){
        alert("Please enter a valid Email ID!!");
    }

    if(password.value.includes("password")){
        alert("Password cannot be password!!");
    }
    if(password.value.includes(fname.value+lname.value)){
        alert("Password cannot be same as the username!!");
    } 
    if(password.value.length<8){
        alert("Please pick a stronger password!!");
    }

    if(password.value != confirm_password.value){
        alert("Passwords should match!!");
    }

    

});
