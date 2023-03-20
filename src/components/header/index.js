import { Link } from "react-router-dom";
import logo from "../../assets/img/foto-logo/filipe-rocha.png";
import "./index.css";

const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        <img src={logo} alt="Logo do Site" />
      </Link>

      <nav>
        <ul>
          <li className="bar-nav-link"><Link className="link">Home</Link></li>
          <li className="bar-nav-link"><Link className="link">Sobre</Link></li>
          <li className="bar-nav-link"><Link className="link">Meus Jogos</Link></li>
          <li className="bar-nav-link"><Link className="link">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
