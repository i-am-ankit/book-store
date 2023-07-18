import { useState } from "react";


function CartButton({bookName}){

    let [cart, setCart] = useState([])

    function addToCart(){
        console.log(bookName)
        setCart(cart.concat(bookName))
        console.log(cart)
    }

    return (
        <>
            <button onClick={addToCart}>Add To Cart</button>
        </>
    )
}

export default CartButton;