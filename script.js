const divNew = document.getElementById('new')
const buttonNew = document.getElementById('add')
const buttonAddTask = document.getElementById('button-add-task')

tasks = []

tasksServerString = localStorage.getItem("tasks")

if(tasksServerString != '' && tasksServerString != null){
    tasksServer = JSON.parse(tasksServerString)
    tasks = tasksServer
}

console.log(tasks)

for (task of tasks){
    let parent = document.getElementsByClassName('tasks')[0]
    console.log(parent)
    parent.innerHTML += '<div></div>'
    let div = parent.children[parent.children.length - 1]

    div.innerHTML = '<div class="text"> <h2> Tarefa Teste </h2><p>Descrição...</p></div><button class="checkbox"></button>'

    let h2 = div.children[0].children[0]
    let p = div.children[0].children[1]

    h2.innerHTML = task.title
    p.innerHTML = task.description
}


buttonNew.addEventListener('click', () => {
    const divNew = document.getElementById('new')
    divNew.style.display = 'flex'
    console.log("teste")

})


function clicked() {

    function task(title, description){
        this.title = title
        this.description = description
    }

    console.log("teste")
    const divNew = document.getElementById('new')

    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    console.log("teste")

    if (title != ''  && description != ''){
        
        tasks.push(new task(title, description))
        localStorage.setItem("tasks", JSON.stringify(tasks))

        location.reload()

    }
    divNew.style.display = 'none'
}

butDels = document.querySelectorAll("button.checkbox")

butDels.forEach((button)=>{
    console.log(button)
    button.addEventListener('click', (e) =>{

        e.target.style.backgroundColor = 'black'

        div = e.target.parentElement
        divText = div.children[0]
        h2 = divText.children[0].innerText
        p = divText.children[1].innerText

        for(i in tasks){
            console.log(tasks[i])
            if(tasks[i].title == h2 && tasks[i].description == p){
                itask = i;
            }
        }
        
        tasks.splice(itask, 1)
        console.log(tasks)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        location.reload()
    })
})

function deleteAll(){
    c = confirm("Tem certeza que deseja apagar todas as suas tarefas?")
    if(c){
        localStorage.clear()
        location.reload()
    }
    
}
