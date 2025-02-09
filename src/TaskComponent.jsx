function TaskComponent() {
    let myTasks = ["Study", "Eat", "Exercise", "Sleep"];
    return <h3>Here is a random task to do: {myTasks[Math.floor( Math.random() * myTasks.length)]}</h3>
}

export default TaskComponent