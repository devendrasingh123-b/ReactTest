import React from 'react'

function Q12() {
    let arr=["React", "JavaScript", "CSS"]

    let val=arr.map((ele)=>{
    // console.log(ele)
   return <p>{ele}</p>
})
  return (<>

<ul>
  {arr.map((ele, index) => (
    <li key={index}>{ele}</li>
  ))}
</ul>


<br />
<mark>there are many rooles</mark>

{/* ya */}


<ul>
  {arr.map((ele, index) => (
    <li key={index}>{ele}</li>
  ))}
</ul>



</>)
}

export default Q12