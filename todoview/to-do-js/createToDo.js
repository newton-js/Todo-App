//alert(localStorage.getItem("toDoDatabase"))
function bar() {
    let nav = document.querySelector(".listDiv")
    if (nav.style.display == "block") {
        document.querySelector(".listDiv").style.display = 'none'
    }
    else {
        document.querySelector(".listDiv").style.display = 'block'
    }
}

function select(value) {
    if (value == "other") {
        document.querySelector(".titles").style.display = "flex"
    }
    else {
        document.querySelector(".titles").style.display = "none"
    }
}

function clear1() {
    document.querySelector(".title").value = ""
}

function clear2() {
    document.querySelector(".summary").value = ""
}

function saveToDo() {
    let dropDown = document.querySelector(".dropDown")
    let summary = document.querySelector(".summary").value
    let date = document.querySelector(".date").value
    let time = document.querySelector(".time").value


    if (dropDown.value == "other") {
        dropDown = document.querySelector(".title").value
        //alert ("yes")
    }
    else {
        dropDown = document.querySelector(".dropDown").value
        //alert("no")
    }

    if (!dropDown || !summary || !date || !time) {
        return alert("enter all details")
    }

    let myToDo = {
        topic: dropDown,
        summary: summary,
        date: date,
        time: time,
        // id: 1,
    }
    //alert("checking")
    let fromDatabase = JSON.parse(localStorage.getItem("toDoDatabase"))

    if (!fromDatabase) {
        myToDo.id = 1;
        localStorage.setItem("toDoDatabase", JSON.stringify([myToDo]))
        //alert("if")
    }
    else {
        var len = fromDatabase.length
        myToDo.id = len + 1;
        fromDatabase.push(myToDo)
        localStorage.setItem("toDoDatabase", JSON.stringify(fromDatabase))
        // alert("else")

    }
    alert("To Do Successfully Saved")
}

function add() {
    saveToDo()
    //alert("Your To-Do has been updated")
    window.location.href ='../to-do-html/dashboard.html'
}
