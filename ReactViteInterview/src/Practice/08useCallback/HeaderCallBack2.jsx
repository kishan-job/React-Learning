import React from "react";

function HeaderCallBack2({ Fn }) {
  console.log("Header Rendered");

  const message = Fn(); // Call the function passed as prop

  return (
    <div>
      <h2>Header</h2>
      <p>{message}</p>
    </div>
  );
}

export default React.memo(HeaderCallBack2);
