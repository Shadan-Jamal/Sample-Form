const form=document.getElementById("form");
const submit=document.getElementById("submit");

submit.addEventListener("click", (e) =>{

    e.preventDefault(); //prevent form from submitting
    const fname=document.getElementById("fname");
    const lname=document.getElementById("lname");
    const email=document.getElementById("floatingInput");
    const address=document.getElementById("floatingTextarea2");
    const phone=document.getElementById("phone");
    const password=document.getElementById("floatingPassword");
    const confirm_password=document.getElementById("confirmPassword");

    if(fname.value.length<5 || lname.value.length <5){
        alert("First and Last name should be atleast 5 characters long");
    }



    const formData = new FormData(form);
    formData.append(fname,fname.value);
    const values =[...formData.entries()];
    console.log(values);
});
