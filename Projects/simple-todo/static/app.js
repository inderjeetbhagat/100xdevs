const todos = document.querySelectorAll(".todo")
for (todo of todos) { 
    todo.addEventListener("click", () => {
         todo.style.textDecoration = "line-through" 
        })
    }