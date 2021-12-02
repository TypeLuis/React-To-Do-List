const ToDoList = (props) =>{
    return(
        <div className='to-do-container'>

        {props.toDoList.map((item, i)=>{
       
          
          return(
            
            <>
                {/* checks if item object key is true */}
                {item.completed ?
                
                  
                <div key={i} className='incomplete-div'>

                  <div>
                    <p className='to-do-list'>{item.description}</p>
                  </div>

                  <p>Mark incomplete</p>
                  <p className="incomplete" onClick={(e)=>{props.handleToggle(i)}}>☒</p>    
                </div>
              
              :

                <div key={i} className='complete-div'>

                  <div>
                    <p className='to-do-list'>{item.description}</p>
                  </div>

                  <p>Mark Complete </p>
                  <p className="complete" onClick={()=>{props.handleToggle(i)}}>✅</p>    
                </div>

              }

            </>          
          )
        })}

      </div>
    )
}

export default ToDoList