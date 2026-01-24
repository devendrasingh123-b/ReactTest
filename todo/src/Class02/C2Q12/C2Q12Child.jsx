import React from "react";

function C2Q12Child({ title, children }) {
  return (
    <div
      style={{
        border: "2px solid #333",
        padding: "16px",
        margin: "12px",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default C2Q12Child;
