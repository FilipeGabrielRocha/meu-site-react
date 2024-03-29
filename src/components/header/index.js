import { Link } from "react-router-dom";
import logo from "../../assets/img/foto-logo/filipe-rocha.png";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="container-header">
        <Link className="logo" to={"/"}>
          <img src={logo} alt="Logo do Site" />
        </Link>

        <nav>
          <input type="checkbox" name="" id="menu-hamburguer" />

          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>

          <ul className="nav-header">
            <li className="bar-nav-link"><Link to={"/"} className="link">Home</Link></li>
            <li className="bar-nav-link"><Link to={"/"} className="link">Sobre</Link></li>
            <li className="bar-nav-link"><Link to={"/"} className="link">Meus Jogos</Link></li>
            <li className="bar-nav-link contato"><Link to={"/contato"} className="link">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
