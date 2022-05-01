import Store from './components/Store';
import './App.css';
import ProductContextProvider from './context/ProductContextProvider';

function App() {

  return (
    <div className="App">
      <ProductContextProvider>
        <Store />
      </ProductContextProvider>
    </div>
  );
}

export default App;
