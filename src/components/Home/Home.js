import NavBar from "../NavBar/NavBar";
import "./Home.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <form className="barra_busqueda">
        <input
          type="text"
          placeholder=" 🔍 Que producto buscas?"
          onChange=""
        ></input>
        <button type="submit">Buscar</button>
      </form>
      <div className="product_container">
        <div className="product_categorias">
          <h1>CATEGORIAS</h1>
          <p>Carnes</p>
          <p>Pollos</p>
          <p>Mariscos</p>
          <p>Pescados</p>
        </div>
        <div className="productos">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
