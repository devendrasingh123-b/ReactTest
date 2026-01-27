import React, { useState } from 'react'
import  "./Flashcard.css"
import flashcards from './FlashCards';



// console.log(flashcards)
function Flashcard() {

  // const [flashcards,setFlashcards]=useState([])
  const [currentIndex,setCurrentIndex]=useState(0)
  const [isFlipped, setIsFlipped] = useState(false);
  const [value,setValue]=useState("")



  function chageFlipped(){
    console.log(isFlipped)

if(isFlipped){
  setIsFlipped(false)
}else{
  setIsFlipped(true)
}

  }

console.log(flashcards)

  return (
 <>
 
<nav><h1 id='navbarHeading'>Flashcard Learning App 📖</h1></nav>


<div>

<div id='FlashcardQuestion' className='FlashcardQuestions'>

{(isFlipped)?(<>

<h1>A : {flashcards[currentIndex].answer}</h1>


</>) :(<><p>Q:{flashcards[currentIndex].question}</p>
<input type="text" placeholder='Enter Anser' value={value} onChange={(ele)=>setValue(ele.target.value)}/></>)}
<button onClick={chageFlipped} >Flip</button>


</div>


<div className='forFlex' id='Flashcardbtn'>

<button>Prev</button>
<button>Next</button>


</div>



</div>


 </>
  )
}

export default Flashcard
