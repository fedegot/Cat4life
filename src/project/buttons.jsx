import { useState  } from "react";

// import { render } from "react-dom";
import "../App.css";
  

const Buttons = () => {
    const [count, setCount] = useState(0);

    const handleIncrement =() =>{
        setCount(prevcount => prevcount + 1);
    };

    const handleDecrement = () =>{
        setCount(prevcount=> prevcount -1);
    };

   setCount = count
    return (
        <div>
        <div>
            <button onClick={handleIncrement}> Add to your cart </button>
            <button onClick={handleDecrement}> Remove from your cart</button>

        </div>
        </div>
  


    )

    

    

   

}
   
export default Buttons
