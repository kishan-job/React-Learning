import React from 'react'

function Card5({content:ContentComponent}) {
  return (
    <div>
          {<ContentComponent />}
          {/* when desctrure compoent we need to use Capital letter at the begining if we didn't use capical it won't render */}
    </div>
  )
}

export default Card5
