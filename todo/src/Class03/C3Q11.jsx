import React, { useState } from 'react';

function C3Q11() {

  // state for input field
  let [input, setInput] = useState("");

  // state for todo list (array of objects)
  const [todo, setTodo] = useState([]);

  // ---------------- ADD TODO ----------------
  function addTodo() {

    // trim removes extra spaces
    let value = input.trim().length;

    // empty input validation
    if (value <= 0) {
      alert("Please Write something");
      return;
    }

    // creating new todo object
    let val = {
      data: input,
      completed: false
    };

    // IMPORTANT: creating NEW array (immutability)
    let settodo = [...todo, val];

    // updating state
    setTodo(settodo);

    // optional: clear input after adding
    setInput("");
  }

  // ---------------- DELETE TODO ----------------
  let DeleteTodo = (i) => {

    /*
      filter creates a NEW array
      removes the item whose index matches 'i'
      React needs new array to re-render
    */
    let val = todo.filter((ele, index) => index !== i);

    setTodo(val);
  };

  // ---------------- COMPLETE TODO ----------------
  function Completed(i) {

    /*
      map is used because:
      - we want to update only ONE item
      - without mutating original array
    */
    let val = todo.map((ele, index) => {

      // if clicked todo index matches
      if (index === i) {

        // returning NEW object (not modifying old one)
        return {
          ...ele,
          completed: !ele.completed // toggle true/false
        };
      }

      // for all other todos, return as it is
      return ele;
    });

    setTodo(val);
  }

  return (
    <>
      <h1>Todo for you</h1>

      {/* controlled input */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todo.map((ele, i) => (

          /*
            IMPORTANT FIX:
            <ul> should contain ONLY <li>
            no <span> wrapper (HTML rule)
          */
          <li
            key={i}
            style={{
              backgroundColor: ele.completed ? "red" : "yellow"
            }}
          >
            {ele.data}

            {/* arrow function needed, otherwise function runs immediately */}
            <button onClick={() => DeleteTodo(i)}>Delete</button>

            <button onClick={() => Completed(i)}>Completed</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default C3Q11;
