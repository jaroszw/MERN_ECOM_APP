import Product from './pages/Product';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Product />
      </Router>
    </div>
  );
};

export default App;
