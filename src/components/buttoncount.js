
import React,{useState} from "react";

 function Buttoncounter(){
    let[count,setcount]=useState(0);
    
    function increment(){
        setcount(count+1);
    }
    return(
        <div>
            <h1>Button clicked {count} times</h1>
            <button onClick={increment}>Button</button>
        </div>
    )
}
export default Buttoncounter;