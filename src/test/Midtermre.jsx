import React, { useState } from "react";

function useFruit(initialValue) {
    const [fruit, setfruit] = useState(initialValue);

    const apple = () => setfruit((fruit) => "apple");
    const orange = () => setfruit((fruit) => "orange");
    const banana = () => setfruit((fruit) => "banana");
    return [fruit, apple, orange, banana]
}

export default useFruit;