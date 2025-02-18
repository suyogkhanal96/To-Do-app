const inputBox = document.getElementById('input-box')
const addBtn = document.getElementById('add-btn')
const deleteBtn = document.getElementById('delete-btn')

let myTask = []

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
}   
)
function renderTask(){
    let taskList = ""
    for(let i=0; i<myTask.length;i++){
        taskList += `<li>${i+1}${"."}${myTask[i]}</li>`
    }
    list.innerHTML = taskList
    console.log(myTask)
}
deleteBtn.addEventListener('click', ()=>{
    localStorage.clear()
})
