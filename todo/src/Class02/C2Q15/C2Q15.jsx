import React, { useState } from 'react'

function C2Q15() {
const [content,SetContent]=useState([])

 const blogs = [
  { title: "Mastering JavaScript", content: "JavaScript is a powerful language for web development." },
  { title: "React in Indian Startups", content: "React is widely used in many Indian tech companies." },
  { title: "Career in Web Development", content: "Explore job roles and growth in web development." },
];

function getContent(e){

console.log(e.target.innerText)
let val=blogs.filter((ele)=>{
  return  ele.title.includes(e.target.innerText)
})

console.log(val)
SetContent(val[0].content)


}


  return (
   <>
    {content}

    {content.length==0?"please Select one Title":content}

<div onClick={getContent}>
{blogs.map((ele)=>(
    
    
    <h1>{ele.title}</h1>)

)}


</div>

   
   </>
  )
}

export default C2Q15