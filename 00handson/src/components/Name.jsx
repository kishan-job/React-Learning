import React from 'react'
import { useContext } from "react";
import {appContext} from "../context/AppContextProvider"
function Name() {
    const {name} = useContext(appContext)
  return (
      <div>Name: { name}</div>
  )
}

export default Name