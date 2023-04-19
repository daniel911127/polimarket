import NavBar from "../NavBar/NavBar";
import "./Home.css";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import img0 from "../../images/costillaCerdo.jpg";
import { BsCart3 } from "react-icons/bs";
import Footer from "../Footer/Footer";

const Home = () => {
  /* En esta parte del codigo se esta trabajando el renderizado del arreglo de los datos pero se encuentra en desarrollo
    const productos=[
    {
      "nombre":"Costilla de cerdo",
      "imagen":{img0} ,
      "categoria":"Carnes",
      "precioKilo":25000,
      "precioLibra":12900,
      "precioUnidad":45000,
      "cantidad":30,
      "descuento":10,
    },
    {
      "nombre":"Cabeza de cañon",
      "imagen":"../../images/cabezaCañon.jpg" ,
      "categoria":"Carnes",
      "precioKilo":25000,
      "precioLibra":12900,
      "precioUnidad":45000,
      "cantidad":30,
      "descuento":10,
    },{
      "nombre":"Pierna Economica",
      "imagen":"../../images/piernaEconomica.jpg" ,
      "categoria":"Carnes",
      "precioKilo":25000,
      "precioLibra":12900,
      "precioUnidad":45000,
      "cantidad":30,
      "descuento":10,
    },{
      "nombre":"Solomito de cerdo",
      "imagen":"../../images/solomitoCerdo.jpg" ,
      "categoria":"Carnes",
      "precioKilo":25000,
      "precioLibra":12900,
      "precioUnidad":45000,
      "cantidad":30,
      "descuento":10,
    },
    {
      "nombre":"Pierna",
      "imagen":"../../images/pierna.jpg" ,
      "categoria":"Carnes",
      "precioKilo":25000,
      "precioLibra":12900,
      "precioUnidad":45000,
      "cantidad":30,
      "descuento":10,
    }
  ]

  

  //const[resultado,SetResultado]=useState([])
  console.log("este es busqueda",busqueda)
  
  //lo que sigue debe ir dentro de un ciclo
  //let filtro=productos.filter(item=>item.categoria===busqueda)
  //console.log(productos[0].categoria)
  //console.log("esto es la busqueda ",busqueda)
  */
  const [busqueda, setBusqueda] = useState("");
  const cambioBusqueda = (e) => {
    setBusqueda(e.target.value);
    //console.log(e.target.value)
  };
  return (
    <div>
      <NavBar />
      <form className="barra_busqueda">
        <input
          type="text"
          placeholder=" 🔍 Que producto buscas?"
          onChange={cambioBusqueda}
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
          {/*
              busqueda.map((busqueda)=>{
                return(
                  <Card
                    key={busqueda.nombre}
                    nombre={busqueda.nombre}
                    imagen={busqueda.imagen}
                    categoria={busqueda.categoria}
                    precioKilo={busqueda.precioKilo}
                    precioLibra={busqueda.precioLibra}
                    precioUnidad={busqueda.precioUnidad}
                    cantidad={busqueda.cantidad}
                    descuento={busqueda.descuento}
                  />
                )
              })
            */}
          <div className="product_card">
            <div className="card_carrito">
              <div>
                <AiFillHeart />
              </div>
              <div> Descuentos</div>
            </div>

            <img src={img0} alt="producto" />

            <div className="card_info">
              <div className="card_titulo">
                <p>Costilla de x 1000gr</p>
              </div>
              <div className="card_precios">
                <p>$20.142</p>
                <p>$22.380</p>
              </div>
              <p className="card_gramo">gramo a $20,14</p>
            </div>
            <input type="number" />

            <button>
              <BsCart3 />
              añadir al carrito
            </button>
          </div>
          <div className="product_card">
            <div className="card_carrito">
              <div>
                <AiFillHeart />
              </div>
              <div> Descuentos</div>
            </div>

            <img src={img0} alt="producto" />

            <div className="card_info">
              <div className="card_titulo">
                <p>Costilla de x 1000gr</p>
              </div>
              <div className="card_precios">
                <p>$20.142</p>
                <p>$22.380</p>
              </div>
              <p className="card_gramo">gramo a $20,14</p>
            </div>
            <input type="number" />
            <button>
              <BsCart3 />
              añadir al carrito
            </button>
          </div>
          <div className="product_card">
            <div className="card_carrito">
              <div>
                <AiFillHeart />
              </div>
              <div> Descuentos</div>
            </div>

            <img src={img0} alt="producto" />

            <div className="card_info">
              <div className="card_titulo">
                <p>Costilla de x 1000gr</p>
              </div>
              <div className="card_precios">
                <p>$20.142</p>
                <p>$22.380</p>
              </div>
              <p className="card_gramo">gramo a $20,14</p>
            </div>
            <input type="number" />
            <button>
              <BsCart3 />
              añadir al carrito
            </button>
          </div>
          <div className="product_card">
            <div className="card_carrito">
              <div>
                <AiFillHeart />
              </div>
              <div> Descuentos</div>
            </div>

            <img src={img0} alt="producto" />

            <div className="card_info">
              <div className="card_titulo">
                <p>Costilla de x 1000gr</p>
              </div>
              <div className="card_precios">
                <p>$20.142</p>
                <p>$22.380</p>
              </div>
              <p className="card_gramo">gramo a $20,14</p>
            </div>
            <input type="number" />
            <button>
              <BsCart3 />
              añadir al carrito
            </button>
          </div>
          <div className="product_card">
            <div className="card_carrito">
              <div>
                <AiFillHeart />
              </div>
              <div> Descuentos</div>
            </div>

            <img src={img0} alt="producto" />

            <div className="card_info">
              <div className="card_titulo">
                <p>Costilla de x 1000gr</p>
              </div>
              <div className="card_precios">
                <p>$20.142</p>
                <p>$22.380</p>
              </div>
              <p className="card_gramo">gramo a $20,14</p>
            </div>
            <input type="number" />
            <button>
              <BsCart3 />
              añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
