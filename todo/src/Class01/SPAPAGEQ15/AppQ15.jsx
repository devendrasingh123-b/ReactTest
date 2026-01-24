import React, { useState } from 'react'
function AppQ15() {
  const [data, setData] = useState("Home");

  function handleNavClick(e) {
    if (e.target.tagName === "H1") {
      setData(e.target.innerText);
    }
  }

  return (
    <>
      <div className="navBar" onClick={handleNavClick}>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>

      <h2>Welcome to {data}</h2>
    </>
  );
}

export default AppQ15