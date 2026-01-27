import React, { use, useEffect, useState } from 'react'
import "./EC.css"


function ECommerceApp() {


  //for DataFetch and display  
const [data,setData]=useState([])
const [error,setError]=useState(null)
const [loading,setLoading]=useState(true)


// inpurt Search
const [value,setValue]=useState("")

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



{/*  */}


 </div>



<div id='MainProductDiv'>




</div>




<div id='ProductBTN'>

<button>Prev</button>
<button>Next</button>


</div> 
 
 </>
  )
}

export default ECommerceApp