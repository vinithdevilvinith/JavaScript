const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const course = document.querySelector("#course");
const checkbox = document.querySelector("#agree");
const radios = document.querySelectorAll('input[name="gender"]');

form.addEventListener("submit", function (e){      //Submit
    e.preventDefault();
    console.log("Form Submitted");
    console.log("User Name : ", username.value);
    console.log("Email     : ",email.value);   

    let selectedGender = "";
    radios.forEach((radio)=>{
        if(radio.checked){
            selectedGender = radio.value;
        }
    });
    console.log("Gender :", selectedGender);
    
});

course.addEventListener("change", function (e) {        //Change
    const selectedCourse = e.target.value;
    console.log("selected Course  : ",selectedCourse);
});

form.addEventListener("reset", function (e) {       //Reset
    console.log("Reset or Clear Form Data");
    
});

checkbox.addEventListener("change",function (e){    //Change
    if(e.target.checked){
        console.log("Checkbox is Checked");
        
    }else{
        console.log("Checkbox Not Checked");
        
    }
});

username.addEventListener("input", function (e) {          //Input
    console.log("Username input changed:", e.target.value);  
});

username.addEventListener("focus", function (e) {    //Focus
    username.style.borderColor = "grey"
});
username.addEventListener("blur", function (e) {     //Blur
    username.style.borderColor = "black"  
});
