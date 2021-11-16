import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
