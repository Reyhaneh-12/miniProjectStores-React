import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';


import style from './shoppCart.module.css';

const ShoppCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={style.container}>
            <div className={style.cartContainer}>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />)
                }
            </div>
            {
                state.itemsCounter && <div className={style.payments}>
                    <p>Total Items: <span>{state.itemsCounter}</span></p>
                    <p>Total Payment: <span>{state.total}</span></p>
                    <div className={style.buttonContainer}>
                        <button className={style.clear} onClick={() => dispatch({type:"CHECKOUT"})}>Check Out</button>
                        <button className={style.checkout} onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={style.complete}>
                    <h3>Check Out Successfully!</h3>
                    <Link to="/products">Buy More!</Link>
                </div>
            }

            {
               !state.checkout && !state.itemsCounter && <div className={style.complete}>
               <h3>Want to Buy?</h3>
               <Link to="/products">Back to Shop!</Link>
                </div> 
            }
        </div>
    );
};

export default ShoppCart;