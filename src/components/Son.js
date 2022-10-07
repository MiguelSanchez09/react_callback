import React, { useState } from "react";
import App from "../App"

function Son(props) {

    const [count, updateCount] = useState(0); 

    function click() {
        props.sonClicked(props.id)
        updateCount(count + 1)
    }

return (
    <div onClick={() => click()}>
        <h1>Son {props.id} </h1>
        <p> Hijos de la familia Adams: {count} </p>

        
    </div>
);
}

export default Son;