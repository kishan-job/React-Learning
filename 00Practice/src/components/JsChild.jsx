import React from 'react'
import { useAppContext } from '../context/appContext'
function JsChild() {
const {name,age}= useAppContext()
  return (
      <div>JsChild
          <div>{name}</div>
          <div>{age}</div></div>
        )
      
      
}

export default JsChild