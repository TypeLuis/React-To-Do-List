import {useState} from 'react'
import './App.css';

function App() {

  const [toDoForm, setTodo] = useState('')
  const [toDoList, setToDoList] = useState([])

  // Set Switch value determines if value of text input is empty of not
  const [switchValue, setSwitchValue] = useState(false)


  const handleToggle = (index) => {

    
    // an array of every toDoObject
    const stateCopy = [...toDoList]

    // gets one object from array through index parameter
    // changes completed boolean to vice versa true or false
    stateCopy[index].completed = !stateCopy[index].completed

    // updates the array
    setToDoList(stateCopy)

  }

  const handleSubmit = (e)=>{

    e.preventDefault();

    setSwitchValue(true)

    // creates an object for each todoList
    const toDoObject = {
      description : toDoForm,
      completed : false
    }

    // adds object to each each itteration of the array
    setToDoList([toDoObject, ...toDoList])

  }


  return (
    <div className="App">

      <h1>My To Do List</h1>

        <div className='toDoForm'>

          <h1>Create New To Do</h1>

          <form onSubmit={handleSubmit}>
            <input type="text" className='formText' name='toDo' value={switchValue ? '' : toDoForm } placeholder="Enter Todo Here"
            onChange={(e)=>{setTodo(e.target.value); setSwitchValue(false)}} />

            <input type='submit' id='submit' value='submit' />
          </form>

        </div>

{/*  //////////////////////////  */}
      <div className='to-do-container'>

        {toDoList.map((item, i)=>{
       
          
          return(
            
            <>
                {/* checks if item object key is true */}
                {item.completed ?
                
                  
                <div key={i} className='incomplete-div'>
                  <div>
                    <p className='to-do-list'>{item.description}</p>
                  </div>
                  <p>Mark incomplete</p>
                  <p className="incomplete" onClick={(e)=>{handleToggle(i)}}>☒</p>    
                </div>
              
              :

                <div key={i} className='complete-div'>
                  <div>
                    <p className='to-do-list'>{item.description}</p>
                  </div>
                  <p>Mark Complete </p>
                  <p className="complete" onClick={()=>{handleToggle(i)}}>✅</p>    
                </div>

              }

            </>          
          )
        })}

      </div>

          
    </div>
  );
}

export default App;
