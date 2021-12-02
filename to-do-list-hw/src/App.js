import {useState} from 'react'
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {

  const [toDoForm, setTodo] = useState('')
  const [toDoList, setToDoList] = useState([])

  // Set Switch value determines if value of text input is empty of not
  const [switchValue, setSwitchValue] = useState(false)





  const handleSubmit = (e)=>{

    e.preventDefault();

    setSwitchValue(true)

    // creates an object for submitted form
    const toDoObject = {
      description : toDoForm,
      completed : false
    }

    // adds object to the toDoList array
    setToDoList([toDoObject, ...toDoList])

  }

  const handleToggle = (index) => {

    
    // an array of every toDoObject
    const stateCopy = [...toDoList]

    // gets one object from array through index parameter
    // changes completed boolean to vice versa true or false
    stateCopy[index].completed = !stateCopy[index].completed

    // updates the array
    setToDoList(stateCopy)

  }


  return (
    <div className="App">

      <h1>My To Do List</h1>


      <ToDoForm 

        handleSubmit = {handleSubmit}
        setSwitchValue = {setSwitchValue}
        setTodo = {setTodo}
        toDoForm = {toDoForm}
        switchValue = {switchValue}
      
      />


      <ToDoList

        toDoList = {toDoList}
        handleToggle = {handleToggle}

      />



    </div>
  );
}

export default App;
