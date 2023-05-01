import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("Data.json").then((res) => setData(res.data));
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
    <DataContext.Provider value={{ data, cart, setCart, compra }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
