//local storage : 
// browser provides an temp database called localstorage 
// we can access this --> inspect --> Application --> localstorage 

// it is not safer and it has very less memory upto 10mb. so we just make use of it for practice 

// to store
localStorage.setItem("Username", "ABC")
localStorage.setItem("place", "Pune")
localStorage.setItem("age", 21)
localStorage.setItem("job", "Soldire")
localStorage.setItem("Pass", "pass@1234")

// to get item 
let place = localStorage.getItem("place")
console.log(place);

// to remove item
localStorage.removeItem("username")
 
//clear the locat storage 
localStorage.clear()
