import React from 'react'
import C2Q12Child from './C2Q12Child'

function C2Q12Parent() {
  return (
  <>
    <div>C2Q12Parent</div>
 <h1>Reusable Card Example</h1>

      <C2Q12Child title="First Card">
        <p>This is the first card content.</p>
      </C2Q12Child>

      <C2Q12Child title="Second Card">
        <p>This is the second card content.</p>
      </C2Q12Child>

      <C2Q12Child title="Third Card">
        <ul>
          <li>Item One</li>
          <li>Item Two</li>
        </ul>
      </C2Q12Child>
  
  </>
  )
}

export default C2Q12Parent