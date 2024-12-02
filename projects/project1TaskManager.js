let tasks = []


function displayMenu(){
    console.log("\nTask Manager")
    console.log("1. Add a Task")
    console.log("2. Remove a Task")
    console.log("3. List All Tasks")
    console.log("4. Exit")

    // prompt user
    let choice = prompt('choose an option 1-4')

    switch(choice){
        case '1':
            addTask();
            break;
        case '2':
            removeTask();
            break;
        case '3':
            listTasks();
            break;
        case '4':
            console.log('Exiting application. Goodbye!');
            break;
        default:
            console.log("invalid option.")
            displayMenu();
            break;
    }
}

function addTask(){
    let taskDescription = prompt('Enter the task description')

    let task = {
        id: tasks.length + 1,
        description: taskDescription,
        completed: false
    }

    tasks.push(task)

    console.log(`Task added: ${task.description}`)

    displayMenu()
}


function removeTask(){
    let taskId = prompt("Enmter te task ID to remove:")

    tasks = tasks.filter(task => task.id !== parseInt(taskId))

    console.log(`Task with ID ${taskId} removed`)

    displayMenu()
}

function listTasks(){
    if(tasks.length === 0){
        console.log("no tasks")
    } else {
        tasks.forEach(task => {
            console.log(`${task.id}, ${task.description} - ${task.completed}`)
        })
    }

    displayMenu()
}

displayMenu() 