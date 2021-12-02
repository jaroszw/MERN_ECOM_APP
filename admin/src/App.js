import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/Homepage";
import UserList from "./pages/userList/userList.jsx";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product.jsx";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />;
      </Routes>
      {admin && (
        <React.Fragment>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/newuser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />;
            </Routes>
          </div>
        </React.Fragment>
      )}
    </Router>
  );
}

export default App;
