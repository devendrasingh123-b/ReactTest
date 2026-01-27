import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoListWork/TodoList'
import { Route, Router, Routes } from 'react-router-dom'
import Q12 from './Class01/Q12'
import Q13 from './Class01/Q13'
import AppQ15 from './Class01/SPAPAGEQ15/AppQ15'
import C2Q11 from './Class02/C2Q11'
import C2Q12Parent from './Class02/C2Q12/C2Q12Parent'
import C2Q13Parent from './Class02/C2Q13/C2Q13Parent'
import C2Q15 from './Class02/C2Q15/C2Q15'
import C3Q11 from './Class03/C3Q11'
import PostsFeed from './Drive01/PostsFeed'
import Flashcard from './Drive02/Flashcard'

function App() {
 

  return (
    <>

<Routes>

<Route path='todo' element={<TodoList/>} />
<Route path="C1Q12" element={<Q12/>} />
<Route path='C1Q13' element={<Q13/>}  />
<Route path='C1Q15' element={<AppQ15/>} />

<Route path='C2Q11' element={<C2Q11/>} />
<Route path="C2Q12" element={<C2Q12Parent/>} />
<Route path="C2Q13" element={<C2Q13Parent/>} />
<Route path="C2Q15" element={<C2Q15/>} />


<Route path='C3Q11' element={<C3Q11/>} />



{/* Drive one */}
<Route path='Drive01' element={<PostsFeed/>} />
{/* Drive02 */}
<Route path='Drive02' element={<Flashcard/>} />

</Routes>






      
    </>
  )
}

export default App
