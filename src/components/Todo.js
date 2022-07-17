import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo,deleteTodo,removeTodo } from './action/index'
import './style.css'

const Todo = () => {

    const[input,setInput] = useState(' ')
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch()

  return (
    <>
    <div className='class-main'>
       <div className='class-child'>
         <h2 style={{color:'white'}}>---: Add Your List :---</h2>
         <br/>
         <br/>
         <div className='edit-todo'>
           <input type='text' className='edit-item' 
           placeholder='write here'
           value={input}
           onChange={(event) =>{
                setInput(event.target.value)
           }}
           />
           <i className='fa-solid fa-plus add-btn1' onClick={() =>dispatch(addTodo(input),
             setInput(' ')
           )}></i>
         </div>
         <div className='showData'>
            {
              list.map((elem)=>{
                return(
                <div className='eachData' key={elem.id}>
           <h3 className='tag-style'>{elem.data}</h3><span>
           <i className='fa-solid fa-trash-can add-btn2 ' onClick={() =>dispatch(deleteTodo(elem.id))}></i>
           </span>
         </div>
              )})
            }
         

         </div>
         <button className='btn-style'>Remove All</button>
       </div>

      </div>

    </>
  )
}

export default Todo