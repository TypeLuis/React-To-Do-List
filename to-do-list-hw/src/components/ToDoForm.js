const ToDoForm = (props) =>{

    return(
        <div className='toDoForm'>

            <h1>Create New To Do</h1>

            <form onSubmit={props.handleSubmit}>
            <input type="text" className='formText' name='toDo' value={props.switchValue ? '' : props.toDoForm } placeholder="Enter Todo Here"
            onChange={(e)=>{props.setTodo(e.target.value); props.setSwitchValue(false)}} />

            <input type='submit' id='submit' value='submit' />
            </form>

        </div>
    )
}

export default ToDoForm