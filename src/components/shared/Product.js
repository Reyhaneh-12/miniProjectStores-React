import React from 'react';
import { shorten } from '../../helper/functions';

import './product.css';

const Product = ({productData}) => {
    const { title, image, price }=productData;

    return (
        <div className="productContainer">
            <img src={image} alt="image" className="productImage" />
            <h3 className="productTitle" >{shorten(title)}</h3>
            <p className="productPrice" >${price}</p>
        </div>
    );
};

export default Product;