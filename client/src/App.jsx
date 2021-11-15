import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// import Pay from './components/Pay';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const user = true;
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
