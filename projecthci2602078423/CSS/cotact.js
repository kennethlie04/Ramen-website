function val(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let preference = document.getElementById("preference")

    if(name.value.lenght <=6){
        alert("Name must be more that 6 characters !")
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Have to be gmail !")
    }
    else if(phone.value == ''){
        alert("Have to be filled !")
    }
    // else if(preference.value != ('ramen') || preference.value !=('dry ramen')){
    //     alert("Choose between ramen or dry ramen!")
    // }
    else{
        alert("Thank you")
    }
}
function redirectToHome(){
    window.location.href = "home.html";
}