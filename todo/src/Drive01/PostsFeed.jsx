import React, { useEffect, useState } from 'react'

function PostsFeed() {

    const [data,setData]=useState([])

    // for name only
    const [name,setName]=useState([])

    // for comments
    const [comment,setComment]=useState([])

    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)


useEffect(()=>{


        async function getData() {

    try {
            
            let res=await fetch("https://jsonplaceholder.typicode.com/posts")
            let data=await res.json()
            // nameresponse
            let nameres=await fetch("https://jsonplaceholder.typicode.com/users")
            let namedata=await nameres.json()
// console.log(namedata)
setName(namedata)
            // console.log(data)
            setData(data)

   } catch (error) {

        console.log(error)
        setError(error.message)
        
    }finally{
        setLoading(false)

    }

            

        }

        getData()
        
 

},[])


 async function  getComments(id){

try {
    let res =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    console.log(res)
    let data=await res.json()
    console.log(data)
    setComment(data)

} catch (error) {

    console.log("comment secction have some proble")
    
}


}


let d=name.map((ele)=>{
    return ele.name
    // console.log(ele.name)
})

// console.log(name[0].name)

console.log(d)
// console.log(data)
// console.log(name[0].company.name)

if(loading){
    return <h1>Loading</h1>
}


if(error){
    return <h1>Somthing went wrong</h1>
}


let postData=data.map((ele)=>{

   
   
//    let title=document.createElement("h2")
//     let bod=document.createElement("p")
    return (

         
     
    <div key={ele.id} >
   
<h2>{ele.title}</h2>
<p>{ele.body}</p>

<section id="commentsec">
<h3 className="namesec">{d[ele.userId-1]}</h3>

<h3 className="namesec toggle" onClick={()=>getComments(ele.id)} > Comments 💬 </h3>

</section>


        
    </div>
    )
   
})




  return (<>
  
  <h1 id='mainTitle'>Post Feed 📱</h1>
  

<div id='mainData'>

{postData}

</div>

  
  </>
  )
}

export default PostsFeed