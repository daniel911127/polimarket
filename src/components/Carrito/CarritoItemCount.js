import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Carrito.css";

const CarritoItemCount = ({ product }) => {
  const { cart, setCart, compra } = useContext(DataContext);

  const restarproducto = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id);
    productrepeat.cantidad !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, cantidad: productrepeat.cantidad - 1 }
            : item
        )
      );
  };
  return (
    <div className="container_conteo">
      <p className="boton_conteo" onClick={() => restarproducto(product)}>
        -
      </p>
      <p className="cantidad_productos">{product.cantidad}</p>
      <p className="boton_conteo" onClick={() => compra(product)}>
        +
      </p>
    </div>
  );
};

export default CarritoItemCount;
