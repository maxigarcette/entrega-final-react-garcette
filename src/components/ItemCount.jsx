import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const minusProduct = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        } 
    }

    const plusProduct = () => {
        if (stock > count) {
            setCount(prev => prev + 1);
        } else {
            alert("No contamos con mas stock disponible")
        }
    }

    return (
        <div className="itemCount">
            <div className="insideItemCount">
                <span onClick={minusProduct}>-</span>
                <span>{count}</span>
                <span onClick={plusProduct}>+</span>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}