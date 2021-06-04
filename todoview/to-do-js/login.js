alert(localStorage.getItem("registration"))
function registerDiv(){
    if(document.querySelector(".login").style.display != "none"){
        document.querySelector(".login").style.display = "none"
        document.querySelector(".register").style.display = "block"
        document.querySelector(".switch").innerHTML = "login"
    }
    else{
        document.querySelector(".register").style.display = "none"
        document.querySelector(".login").style.display ="block"
        document.querySelector(".switch").innerHTML ="Register"
    }
}

function register(){
    let ourEmail = document.querySelector(".email").value
    let ourPassword = document.querySelector(".password").value
    let getRegisteration = JSON.parse(localStorage.getItem("registration"))

    let inputData = {
        email: ourEmail,
        password: ourPassword
        }

    if(ourEmail=="" || ourPassword==""){
        return alert("Enter all requirements")
    }

    if(ourPassword.length>=8 && ourPassword.length<=20){
        let checkUppercase = true
        let checkNumber = true
        let checkCharacter = true

        for(let check of ourPassword){
            if(check==check.toUpperCase()){
                checkUppercase = false
            }
            if(Number(check)){
                checkNumber = false
            }
            if(check < "a"){
                checkCharacter = false
            }
        }

        if(checkUppercase && checkNumber && checkCharacter){
            return alert("your password needs to coutain at least an uppercase, number and character")
        }

        if(!getRegisteration){
            localStorage.setItem("registration", JSON.stringify([inputData]))
        }
        else{
            getRegisteration.push(inputData)
            localStorage.setItem("registration", JSON.stringify(getRegisteration))
        }
    
        alert("Registration Successfull")
       
    }
    else{
        return alert("your password is either less 8 or more than 20")
    }
    
}
function login(){

    let ourEmail = document.querySelector(".email").value
    let ourPassword = document.querySelector(".password").value

    if(ourEmail=="" || ourPassword==""){
        return alert("Enter all requirements")
    }

    let getRegisteration = JSON.parse(localStorage.getItem("registration"))
    let exist = false

    for(let check of getRegisteration){
        if(check.email==ourEmail && check.password==ourPassword){
            exist = true
        }
    }

    if(exist){
        alert("login successful")
        window.location.href = "../to-do-html/dashboard.html"
    }
    else{
        return alert("invalid login details")
    }
}

function forgotPassword(){
    document.querySelector(".align").style.display="none"
    document.querySelector(".forgotPasswordDiv").style.display="flex"
    document.querySelector(".myConfirmBox").style.display="none"
    document.querySelector(".myPasswordBox").style.display="none"
}

function cancel(){
    document.querySelector(".align").style.display = "flex"
    document.querySelector(".forgotPasswordDiv").style.display = "none"
}

function clear1(){
    document.querySelector(".myEmail").value = ""
}

function submitNewPassword(){
    let userEmail = document.querySelector(".myEmail").value
    let ourEmail = document.querySelector(".email").value
    userEmail == ourEmail
    let freshPassword = document.querySelector(".newPassword").value
    let checkFreshPassword = document.querySelector(".confirmPassword").value
    let getRegisteration = JSON.parse(localStorage.getItem("registration"))
    let exist = true
    let equal = false

    if(!userEmail){
        return alert("enter your Email")
    }

    if(userEmail && (!freshPassword || !checkFreshPassword)){
        for(check of getRegisteration){
            if(check.email == userEmail){
                exist = false
                break;
            }
        }
        if(exist){
            return alert("Email does not exist, please register afresh")
        }
        document.querySelector(".myPasswordBox").style.display = "flex"
        document.querySelector(".myConfirmBox").style.display = "flex"

    }
    else if(userEmail && freshPassword && checkFreshPassword){

       if(freshPassword != checkFreshPassword){
            return alert("Your passwords dont match")
       }

       for(let inspect of getRegisteration){
            if (inspect.email == userEmail){
                inspect.password = freshPassword
                break;
            }
       }

       localStorage.setItem("registration", JSON.stringify(getRegisteration))
       alert("your account is successfully retrieved!")
       window.location.href = "../to-do-html/login.html"
    }       
    else{
        return alert("Enter All Requirements")
    }

}

