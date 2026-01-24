import React from 'react'
import C2Q13Child from './C2Q13Child'

function C2Q13Parent() {
  return (
   <>
   <h1> <div>C2Q13Parent</div></h1>

<div className='C2Q13'>
<h1>Heding</h1> 
<p>Lorem ipsum, .</p>   
    
</div>  
   
<C2Q13Child>
<div className='C2Q13Child'>

<h4>first</h4>
<ul>
<li>one</li>
<li>2</li>
<li>3</li>

</ul>

<h1>OK ji</h1>

<button>Click</button>

</div>
</C2Q13Child>

   </>
  )
}

export default C2Q13Parent