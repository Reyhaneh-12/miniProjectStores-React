import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {

    const {state} = useContext(CartContext);
    return (
        <div className={styles.container}>
            <Link className={styles.productLink} to="/products">Products</Link>
            <div className={styles.iconContainer}>
                <Link className={styles.productCart} to="/cart">Cart</Link>
                <span className={styles.counterCart}>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;