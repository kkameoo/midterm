import React from "react";
import useFruit from "./Midtermre";

function Midterm(props) {
    return (
        <div style={{ padding: 16}}>
            <p>어떤 과일을 좋아하나요?</p> <br></br>
            <button onClick={apple}>사과</button>
            <button onClick={orange}>오렌지</button>
            <button onClick={banana}>바나나</button>
        </div>
    );
}

export default Midterm;