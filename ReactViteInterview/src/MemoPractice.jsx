import {useState} from 'react'
function MemoPractice() {

    const[number,setNumber] = useState(0);
    const[count, setCount] = useState(0)

    const numCube =(num)=>{
        console.log("Calculation Done")
        return Math.pow(num,3)
    }
    const result = numCube(number);

    const increment =()=>{
        setCount(count+1)
    }
    return(<>
    <h1>Enter the number you will get exponent of 3 and result {result}</h1>
    <input type='number' onChange={(e)=>{setNumber(e.target.value==''?0:Number(e.target.value))}}/>

<div><button onClick={increment}>Incriment {count}</button></div>
    
    </>)
}

export default MemoPractice