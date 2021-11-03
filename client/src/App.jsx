import Product from "./pages/Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pay from "./components/Pay";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route to="/pay">
            <Pay />
          </Route>
          <Route to="/product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
