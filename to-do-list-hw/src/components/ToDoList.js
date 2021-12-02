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

                                <div className={'description-div complete-desc'}>
                                    <h2 className='description'>{item.description}</h2>
                                </div>

                                <h3 className='complete'>Mark incomplete</h3>
                                <h4 className="complete-mark" onClick={(e)=>{props.handleToggle(i)}}>☒</h4>    
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

                                <div className= {'description-div incomplete-desc'}>
                                    <h2 className='description'>{item.description}</h2>
                                </div>

                                <h3 className='incomplete'>Mark Complete </h3>
                                <h4 className="incomplete-mark" onClick={()=>{props.handleToggle(i)}}>✅</h4>    
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