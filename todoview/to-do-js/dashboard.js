//alert(localStorage.getItem("toDoDatabase"))

function bar() {
    let nav = document.querySelector(".list")
    if (nav.style.display == "block") {
        document.querySelector(".list").style.display = 'none'
    }
    else {
        document.querySelector(".list").style.display = 'block'
    }
}

function profile(){
    let nam = JSON.parse(localStorage.getItem("myName"))
    alert(nam)
    let prof = document.querySelector(".profile") 
    prof.innerHTML =  `${nam}`
}
//profile()
function logout() {
    let ask = confirm("do you wanna logout?")
    if (ask) {
        window.location.href = "../to-do-html/login.html"
    }
}

function toCreateToDo() {
    window.location.href = "../to-do-html/createToDo.html"
}

function clearTodos(){
    let ask = confirm("are you sure you want to clear all to-do?")
    if (ask) {
        localStorage.removeItem("toDoDatabase")
    }
}

//alert(localStorage.getItem("toDoDatabase"))
let fromDatabase = JSON.parse(localStorage.getItem("toDoDatabase"))


appear()
function appear() {
    // let fromDatabase = JSON.parse(localStorage.getItem("toDoDatabase"))
    let attached = document.querySelector(".toDoList")
    attached.innerHTML = fromDatabase.map((check) => {
        // alert(JSON.parse(localStorage.getItem("counting")))
                                        return `<div class="smartToDo">
                                                <div class="iconable">
                                                    <div class="forIcons"><i class="fa fa-check"></i></div>
                                                    <div onclick="getTodo(${check.id})" class="things">
                                                        <p class="topics">${check.topic}</p>
                                                        <div class="summariesDiv" ><p class="summaries">${check.summary}</p></div>
                                                    </div>  
                                                </div>
                                                <div class="onHover">
                                                    <button onclick="editTodo(${check.id})" class="forEdit"><i class="fa fa-edit"></i></button>
                                                    <button onclick="dell(${check.id})" class="forDelete"><i class="fa fa-trash"></i></button>
                                                </div>
                                            </div>
                                        `}).join("")
}

function getTodo(todoId) {
    // let todos = JSON.parse(localStorage.getItem("toDoDatabase"))
    console.log(todoId)
    var item = fromDatabase.find(todo => todo.id === todoId);

    console.log(item)

   alert(`todo topic: ${item.topic} \n todo summary: ${item.summary} \n todo date: ${item.date} \n todo time: ${item.time}`)

}

function dell(todoId) {
    // let todos = JSON.parse(localStorage.getItem("toDoDatabase"))
    var item = fromDatabase.find(todo => todo.id === todoId);
    if (item) {
        // todos.splice(todoId)
        var remainingTodos = fromDatabase.filter(todo => todo.id != todoId);

        console.log(remainingTodos)

        localStorage.setItem('toDoDatabase', JSON.stringify(remainingTodos));
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

function cancel() {
    window.location.href ="../to-do-html/dashboard.html"
}

function editTodo(todoId) {
    document.querySelector(".container").style.display = 'none'
    document.querySelector(".container2").style.display = 'flex'
    var item = fromDatabase.find(todo => todo.id === todoId);
    let ace = document.querySelector(".dropDown")
    let aces = document.querySelector(".title")
    let sum = document.querySelector(".summary")
    let date = document.querySelector(".date")
    let time = document.querySelector(".time")
    ace.value = item.topic
    aces.value = item.topic
    
    console.log(todoId)
    
    // alert(item.topic)
    
    sum.value = item.summary
    date.value = item.date
    time.value = item.time
    
    //console.log(item)
    let editId = item.id
    // alert(editId)
    localStorage.setItem("theEditedId", JSON.stringify(editId))
    // var remainingTodos = fromDatabase.filter(todo => todo.id != todoId);
    // console.log(remainingTodos)
    // var newToDoList = [...remainingTodos, item]
    

    // alert(`todo topic: ${item.topic} \n todo summary: ${item.summary}`)
    
}

function todoUpdate(){
    // alert('wanna update')
    var editID = JSON.parse(localStorage.getItem('theEditedId'))
    let ace = document.querySelector(".dropDown")
    let aces = document.querySelector(".title")
    let sum = document.querySelector(".summary")
    let date = document.querySelector(".date")
    let time = document.querySelector(".time")

    if (ace.value == "other") {
        ace = aces.value
    }
    else {
        ace = document.querySelector(".dropDown").value
    }

    for(let check of fromDatabase){
        if (check.id == editID) {
            check.topic = ace
            check.summary = sum.value
            check.date = date.value
            check.time = time.value
        }
    }
    
    localStorage.setItem('toDoDatabase', JSON.stringify(fromDatabase));
    alert("update successful!")

    document.querySelector(".container2").style.display = 'none'
    document.querySelector(".container").style.display = 'flex'
}





// //let result = Math.floor (Math.random() *10)
// //console.log(result)
// let x = "10"
// let y = "10.564"
// let num2 = '15.6373'
// //console.log(x.toString())
// console.log(parseFloat(num2))
// let t = parseFloat(num2)
// let p = t.toFixed(2)
// //console.log(p)
// console.log(parseFloat(num2).toFixed(3))

// let str = "this is a string for javascript string functions, javascript"
// // the slice method for string .slice(index, position)
// console.log(str.slice(5))   //is a string for javascript string functions, javascript
// console.log(str.slice(-10))  //javascript
// console.log(str.slice(0, 4))  //this
// console.log(str.slice(10, 16)) //string
// // the substr method for string .substr(index, length)
// console.log(str.substr(0, 4)) //this
// console.log(str.substr(10, 6)) //string
// console.log(str.substr(10)) //string for javascript string functions, javascript

//let game = null
//let game = ''
// (game == "5") ? console.log("yes") : console.log("no")

// if(game){
//     console.log(true)
// }else{
//     console.log(false)
// }
             //   more on Array
// let arr = ['ab','bc','cd','ef','fg']
// let arrr =["moh", "yusuf", "newton", "ridwan", "boss"]
// let arr2 = [ 1, 5, 7, 9, 35]
            //pop()
// console.log(arr.pop()) // fg 
// console.log(arr)  // ['ab','bc','cd','ef']
//             //splice(start index, no of elements to delete)
// console.log(arr.splice(1,2))  //[ 'bc', 'cd' ]

// console.log(arr) //[ 'ab', 'ef', 'fg' ]
//             //splice(start index, no of elements to delete, elements to replace)
//console.log(arr.splice(1,2,'abd','hje',8))  // [ 'bc', 'cd' ]
//console.log(arr) // ['ab', 'abd', 'hje', 8, 'ef', 'fg']
                //concat()
//console.log(arr.concat(arr2)) //['ab', 'bc', 'cd', 'ef','fg', 1,  5,  7,  9, 35]
                //sort() ascending order
//console.log(arrr.sort()) // [ 'boss', 'moh', 'newton', 'ridwan', 'yusuf' ]




let ball 
if(ball){
    console.log("yes")
}else{
console.log("no")}