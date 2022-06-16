const toDoList = function(){

let todo = ['laundry', 'grocery shopping', 'workout', 'feed the parrot']

let list = document.getElementById("myList")


todo.forEach((item)=>{
    let div = document.createElement("div")
    let li = document.createElement("li")
    let check = document.createElement("input")
    check.setAttribute("type","checkbox")
    li.innerText = item;
    div.append(check, li)
    list.append(div)
  })
}

toDoList()

let myList = document.getElementById("myList")
console.log(myList)

const addTask = function(){
    let newTask = (document.getElementById('task').value)
    console.log(newTask, "This is new task!")
    let div = document.createElement("div")
    let li = document.createElement("li")
    let check = document.createElement("input")
    check.setAttribute("type","checkbox")
    li.innerText = newTask;
    div.append(check, li)
    myList.append(div)
    console.log(myList,"THis is myList")
}

