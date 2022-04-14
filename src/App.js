import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Share/Header/Header";
import About from "./Pages/Home/About/About";
import Login from "./Pages/Home/Login/Login";
import NotFound from "./Pages/Share/NotFound/NotFound";
import Order from "./Pages/Order/Order";
import Register from "./Pages/Home/Register/Register";
import Footer from "./Pages/Share/Footer/Footer";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
