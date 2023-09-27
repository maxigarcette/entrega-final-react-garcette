import cart from "../assets/cart.png"
import { Link } from "react-router-dom"

import { CartContext } from "../contexts/CartContext"
import { useContext} from "react"

export const CartWidget = () => {
    const { totalWidget } = useContext (CartContext)

    return(
        <Link to='cart'>
            <img src={cart} alt="imgCart"/><span>{totalWidget}</span>
        </Link>
    )
}
