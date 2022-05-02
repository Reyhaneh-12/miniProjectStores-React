import React, { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { shorten } from '../../helper/functions'
import style from "./cart.module.css";

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;
  const {dispatch} = useContext(CartContext);
  return (
    <div className={style.container}>
      <img className={style.productImage} src={image} alt="image" />
      <div className={style.data}>
        <h3 className={style.title}>{shorten(title)}</h3>
        <p className={style.price}>{price}$</p>
      </div>
      <div>
        <span className={style.quantity}>{quantity}</span>
      </div>
      <div className={style.buttonContainer}>
        {
            quantity > 1 ?
            <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button> :
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>Del</button>
        }
        <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
      </div>
    </div>
  );
};

export default Cart;
