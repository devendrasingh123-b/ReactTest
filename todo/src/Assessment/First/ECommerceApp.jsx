import React, { use, useEffect, useState } from 'react'
import "./EC.css"


function ECommerceApp() {


  //for DataFetch and display  
const [data,setData]=useState([])
const [error,setError]=useState(null)
const [loading,setLoading]=useState(true)
let arr=[]


// inpurt Search
const [value,setValue]=useState("")

// for Paggination 
const [start,setStart]=useState(0)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Somethign went wrong");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

console.log(data)


// Pagination





let max=5  
let startValue=start*max
let end=startValue+max
console.log(startValue,end)

if(data.length>0){

  console.log("hi")
  arr=data.slice(startValue,end)
  console.log(arr)
}






if(loading){
  return <h1>Loading ....</h1>
}


if(error){
  return <h1>Something went wrong</h1>
}

  return (
 <>
 <h1><div>ECommerceApp</div></h1>


 <div>

{/* For Search */}
<div id='SearchSection'>
<label htmlFor="Search">Name</label>
<input type="text" value={value}  id='Search' onChange={(ele)=>{
  setValue(ele.target.value)
}} />

<button>Search</button>
</div>



{/* For sort  */}





<select name="" id="">

<option value="Ascending">A-B</option>
<option value="Descending">B-A</option>

</select>



<select name="" id="">

<option value="men's clothing">men's clothing</option>
<option value="jewelery">jewelery</option>
<option value="electronics">electronics</option>
<option value="women's clothing">women's clothing</option>



</select>

 </div>



<div id='MainProductDiv'>

{arr.map((ele)=>{
  
  // console.log(ele)
  return(<div key={ele.id}>

<h1>{ele.id}</h1>
<img src={ele.image} alt={ele.category} />
<h5>{ele.price}</h5>


</div>)


})}



</div>




<div id='ProductBTN'>

<button  onClick={()=>{setStart((ele)=>ele-1) }}>Prev</button>
<button onClick={()=>{setStart((ele)=>ele+1)}}>Next</button>


</div> 
 
 </>
  )
}

export default ECommerceApp