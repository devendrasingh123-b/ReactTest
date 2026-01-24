// import React, { useRef, useState }   from 'react'

// function Q13() {
//     const [reactTitle, setReactTitle] = useState("React Title");
//   const [reactCount, setReactCount] = useState(0);

//   // Vanilla JS counters (no re-render)
//   const vanillaCountRef = useRef(0);

//   // Vanilla JS DOM update
//   const handleVanillaChange = () => {
//     const title = document.getElementById("vanilla-title");
//     title.innerText = "Vanilla JS Title " + (vanillaCountRef.current + 1);

//     vanillaCountRef.current += 1;

//     document.getElementById("vanilla-count").innerText =
//       vanillaCountRef.current;
//   };

//   // React update
//   const handleReactChange = () => {
//       setReactCount((prev) => prev + 1);
//       setReactTitle("React Title " + (reactCount ));
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>L1 - Virtual DOM Performance Demo</h2>

//       {/* Vanilla JS Section */}
//       <div style={{ border: "1px solid red", padding: "10px", marginBottom: "20px" }}>
//         <h3 id="vanilla-title">Vanilla JS Title</h3>
//         <p>
//           DOM Updates: <span id="vanilla-count">0</span>
//         </p>
//         <button onClick={handleVanillaChange}>
//           Change Title (Vanilla JS)
//         </button>
//       </div>

//       {/* React Section */}
//       <div style={{ border: "1px solid green", padding: "10px" }}>
//         <h3>{reactTitle}</h3>
//         <p>DOM Updates: {reactCount}</p>
//         <button onClick={handleReactChange}>
//           Change Title (React)
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Q13


import React, { useRef } from 'react'

function Q13() {
    let ref=useRef()
    function getData(){
        console.log(ref)

        console.log(ref.current)
        console.log(ref.current.value)


    }
    
  return (
   
<>
<input type="text" ref={ref} />

<button onClick={getData}>Click</button>

</>
  )
}

export default Q13




