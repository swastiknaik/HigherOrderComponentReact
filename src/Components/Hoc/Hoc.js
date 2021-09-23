import React,{useState} from "react";

const HOC =(Component, data)=>{
   
    return function Hoc() {
        const [count,setCount]=useState(0)
    
        const updateCount=()=>{
            setCount(count+1)
        }
        return (
            <div>
                <Component count={count} updateCount={updateCount}/>
            </div>
        )
    }
    
}
export default HOC;