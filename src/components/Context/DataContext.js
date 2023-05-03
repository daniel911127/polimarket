import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [body, setBody] = useState({ usuario: "", contraseña: "" });
  const [anadir, setAnadir] = useState({
    id: 0,
    nombre: "",
    imagen: "",
    categoria: "",
    precioKilo: 0,
    precioLibra: 0,
    precioUnidad: 0,
    cantidad: 0,
    descuento: 0,
  });

  useEffect(() => {
    axios.get("Data.json").then((res) => setData(res.data));
    axios.get("Admin.json").then((res) => setAdmin(res.data));
  }, []);

  const compra = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id);
    if (productrepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, cantidad: productrepeat.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };
  return (
    <DataContext.Provider
      value={{
        data,
        cart,
        setCart,
        compra,
        detalle,
        setDetalle,
        admin,
        setAdmin,
        body,
        setBody,
        anadir,
        setAnadir,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
