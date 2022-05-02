import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../../helper/functions';

import styles from "./product.module.css";

const Product = ({productData}) => {
    const { id, title, image, price }=productData;

    return (
        <div className={styles.container}>
            <img src={image} alt="image" className={styles.image} />
            <h3 className={styles.title} >{shorten(title)}</h3>
            <p className={styles.price} >${price}</p>
            <Link to={`products/${id}`}>Details</Link>
        </div>
    );
};

export default Product;