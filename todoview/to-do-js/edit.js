let fromTodoId = JSON.parse(localStorage.getItem("editTodo"))

function editTodo(todoId){
    
    console.log(item)
    let attach = document.querySelector(".boxes")
    attach.innerHTML
    `<div class="bottomBox">
    <div class="details">
        <p class="summary">${check.topic}</p>
    </div>
    <div class="details">
        <p class="summary">${check.summary}</p>
    </div>
    <div class="details">
        <p class="summary">${check.date}</p>
    </div>
    <div class="details">
        <p class="summary">${check.time}</p>
    </div>
    <button onclick="ok()" class="addBTN">OK</button>
</div>`

    // alert(`todo topic: ${item.topic} \n todo summary: ${item.summary}`)

    item.summary = 'Noooooo';

    var remainingTodos = fromDatabase.filter(todo => todo.id != todoId);

    var newToDoList = [...remainingTodos, item]

    localStorage.setItem('toDoDatabase', JSON.stringify(newToDoList));

}
editTodo()