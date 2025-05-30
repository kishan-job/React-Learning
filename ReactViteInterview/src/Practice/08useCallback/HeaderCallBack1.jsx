import React from 'react'

function HeaderCallBack1() {
    console.log("Header Rendered");
    
  return (
    <div>
      Header 
    </div>
  )
}

export default React.memo(HeaderCallBack1)

// React.memo() is a higher-order component (HOC) in React that memoizes a functional component, meaning:

// It prevents re-rendering of the component unless its props have changed.
