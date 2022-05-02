import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';
import styles from './productDetails.module.css';

const ProductDetails = (props) => {
    
    const id = props.match.params.id;
    const data= useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;
    
    return (
        <div className={styles.container}>
            <img src={image} className={styles.image} />
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>Category: <span>{category}</span></p>
                <div className={styles.btnContainer}>
                    <p className={styles.price}>{price}$</p>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;