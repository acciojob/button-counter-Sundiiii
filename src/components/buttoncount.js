
import React,{useState} from "react";

 function Buttoncounter(){
    let[count,setcount]=useState(0);
    
    function increment(){
        setcount(count+1);
    }
    return(
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={increment}>Button</button>
        </div>
    )
}
export default Buttoncounter;