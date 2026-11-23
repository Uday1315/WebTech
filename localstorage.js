//local storage : 
// browser provides an temp database called localstorage 
// we can access this --> inspect --> Application --> localstorage 

// it is not safer and it has very less memory upto 10mb. so we just make use of it for practice 

// // to store
// localStorage.setItem("Username", "ABC")
// localStorage.setItem("place", "Pune")
// localStorage.setItem("age", 21)
// localStorage.setItem("job", "Soldire")
// localStorage.setItem("Pass", "pass@1234")

// // to get item 
// let place = localStorage.getItem("place")
// console.log(place);

// // to remove item
// localStorage.removeItem("username")
 
// //clear the locat storage 
// localStorage.clear()


// **************************************************************


let form = document.getElementById("form")
let user = document.getElementById("username")
let pass = document.getElementById("pass")
let email = document.getElementById("email")
let submit = document.getElementById("submit")
let login = document.getElementById("login")
let result = document.getElementById("result")

submit.addEventListener("click",()=>{
    localStorage.setItem("username",user.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",pass.value)
})

login.addEventListener("click",(event)=>{
    event.preventDefault()
    if(user.value == localStorage.getItem("username") && pass.value == localStorage.getItem("password")){
        result.innerHTML="Login Sucessful"
        result.style.color = "green"
    }
    else{
        result.innerHTML="Invalid Credentials"
        result.style.color = "red"  
    }
})