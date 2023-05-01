import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DataProvider from "./components/Context/DataContext";
import Carrito from "./components/Carrito/Carrito";
import Detalle from "./components/Detalle/Detalle";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
