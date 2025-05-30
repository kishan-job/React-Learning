import React from 'react'
import Js from './components/Js'
import {AppcontextProvivider} from "./context/appContext.js"
function App() {
  const person ={name:"sii",num: 905}
  return (
    <AppcontextProvivider value ={person}>
<Js/>
    </AppcontextProvivider>
  )
}

export default App
