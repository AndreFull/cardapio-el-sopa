import "../Navbar/Navbar.css";

import sacola from "assets/icons/sacola.svg";
import logo from "../../assets/chef.png";

function Navbar() {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Sopa"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> El Sopa </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;