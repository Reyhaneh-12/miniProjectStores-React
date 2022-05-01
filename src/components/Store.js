import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';
import Product from './shared/Product';

import './store.css';

const Store = () => {

    const products = useContext(ProductsContext);
    return (
        <div className="container">
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;