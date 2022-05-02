import { Redirect, Route, Switch } from 'react-router';
import Navbar from './components/shared/Navbar';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Cart from './components/shared/Cart'
import './App.css';

import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {

  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Route path="/cart" component={Cart} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
