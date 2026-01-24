import React from 'react'

function TodoList() {
  return (
    <>
    <h1 id='MainHeading'>ToDo List </h1>

  


<label htmlFor="title">Title</label>
<input type="text"  placeholder='Title' id='title'/>

<input type="text" placeholder='Work' />

<button type='submit'>Save</button>


 

    
    </>
  )
}

export default TodoList