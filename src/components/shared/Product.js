import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
import { shorten, isInCart, quantityCount } from '../../helper/functions';

import styles from "./product.module.css";

const Product = ({productData}) => {
    
    const { id, title, image, price }=productData;
    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={image} alt="image" className={styles.image} />
            <h3 className={styles.title} >{shorten(title)}</h3>
            <p className={styles.price} >${price}</p>

            <div className={styles.linkContainer}>
                <Link to={`products/${id}`} className={styles.productDetails}>Details</Link>
                <div className={styles.btnContainer}>
                    { quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE-ITEM", payload: productData})} className={styles.productSmallBtn} >Del</button> }
                    { quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: productData})} className={styles.productSmallBtn} >-</button> }
                    { quantityCount(state, productData.id) > 0 && <span className={styles.productQuantity} >{quantityCount(state, productData.id)}</span> }
                    {
                        isInCart(state, productData.id) ?
                            <button onClick={() => dispatch({type:"INCREASE", payload: productData})} className={styles.productSmallBtn} >+</button> :
                            <button onClick={() => dispatch({type:"ADD-ITEM", payload: productData})} className={styles.productBtn} >Add In Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;