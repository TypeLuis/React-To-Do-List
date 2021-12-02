const ToDoForm = (props) =>{

    return(
        <div className='toDoForm'>

            <h1>Create New To Do</h1>

            <form onSubmit={props.handleSubmit}>

            <label for="to-do-form">Todo : </label>
                
                <input type="text" id="to-do-form" className='formText' name='toDo' value={props.switchValue ? '' : props.toDoForm } placeholder="Enter Todo Here"
                onChange={(e)=>{props.setTodo(e.target.value); props.setSwitchValue(false)}} />
                
                

                <input type='submit' id='submit' value='submit' />

                {/* <label for="submit"></label> */}
            </form>

        </div>
    )
}

export default ToDoForm