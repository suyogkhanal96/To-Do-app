const inputBox = document.getElementById('input-box')
const addBtn = document.getElementById('add-btn')
const deleteBtn = document.getElementById('delete-btn')
const doneBtn = document.getElementById('done-btn')
let myTask = []
var taskfromlocal = JSON.parse(localStorage.getItem("myTask"))
console.log(taskfromlocal)
if(taskfromlocal){
    myTask = taskfromlocal
    renderTask()
}
addBtn.addEventListener('click', ()=> {
    
    const taskvalue = inputBox.value.trim()
    if(taskvalue!=""){
        myTask.push(taskvalue)
        console.log(myTask)
        renderTask()
    }else{
        alert("Please Enter a Task")
    }
   inputBox.value=""
   localStorage.setItem("myTask",JSON.stringify(myTask))
  
}   

)
function renderTask(){
    let taskList = ""
    for(let i=0; i<myTask.length;i++){
        taskList += `<li>${i+1}${"."}${myTask[i]}</li>`
    }
    list.innerHTML = taskList
    
}
deleteBtn.addEventListener('click', ()=>{
    localStorage.clear("myTask")
    myTask = []
    renderTask()

})
