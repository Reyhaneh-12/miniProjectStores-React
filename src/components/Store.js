import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);
    return (
        <div>
            {
                products.map(product => <div key={product.id}>
                    {product.title}
                </div>)
            }
        </div>
    );
};

export default Store;