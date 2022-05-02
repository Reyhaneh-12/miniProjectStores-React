import { Redirect, Route, Switch } from 'react-router';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import './App.css';

import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {

  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
