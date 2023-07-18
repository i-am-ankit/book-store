import { useState } from "react"


function Button(){

    let [count, setCount] = useState(0)
    function increase(){
        setCount(++count)
    }

    function decrease(){
        setCount(count >0 ?--count : count)
    }

    return (
        <>
            <button onClick={decrease}>-</button>
                {count}
            <button onClick={increase}>+</button>
        </>
    )
}

export default Button