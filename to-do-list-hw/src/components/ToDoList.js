const ToDoList = (props) =>{
    return(
        <div className='to-do-container'>




            <div className='complete-div'>

                <h1>Completed Tasks</h1>

                {props.toDoList.map((item, i)=>{

                    return(

                        <>
                            {/* checks if item object key is true */}
                            {item.completed ?
                            
                            
                                <div key={i} style={{animation: 'fade-in 2s ease-in' }} className='complete-box' >

                                <div className='description-div'>
                                    <p className='description'>{item.description}</p>
                                </div>

                                <p className='complete'>Mark incomplete</p>
                                <p className="complete-mark" onClick={(e)=>{props.handleToggle(i)}}>☒</p>    
                                </div>
                        
                            :

                                null

                            }

                        </>          
                    )
                })}
            </div>

            <div className='incomplete-div'>

                <h1>Incompleted Tasks</h1>

                {props.toDoList.map((item, i)=>{
            
                
                    return(
            
                        <>
                            {/* checks if item object key is true */}
                            {item.completed ?
                        
                                null
                        
                            :
                                <div key={i} style={{animation: 'fade-in 2s ease-in' }} className='incomplete-box'>

                                <div className= 'description-div'>
                                    <p className='description'>{item.description}</p>
                                </div>

                                <p className='incomplete'>Mark Complete </p>
                                <p className="incomplete-mark" onClick={()=>{props.handleToggle(i)}}>✅</p>    
                                </div>
                            }

                        </>          
                    )
                })}
            </div>





        </div>
    )
}

export default ToDoList