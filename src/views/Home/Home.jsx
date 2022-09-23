import "../Home/Home.css";
import SopaLista from "components/SopaLista/SopaLista";
import Navbar from "components/Navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <SopaLista />
      </div>
    </div>
  );
}

export default Home;


 


