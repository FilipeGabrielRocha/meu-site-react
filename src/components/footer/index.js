import "./index.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import logoSite from "../../assets/img/foto-logo/filipe-rocha.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="imagem" src={logoSite} alt="Logo do Site" />

      <nav>
        <ul>
          <li className="links">
            <Link className="link-2">Home</Link>
          </li>
          <li className="links">
            <Link className="link-2">Meus Jogos</Link>
          </li>
          <li className="links">
            <Link className="link-2">Sobre</Link>
          </li>
        </ul>
      </nav>

      <ul className="social">
        <li className="links">
          <Link to="https://www.linkedin.com/in/filipe-gabriel-rocha-a4446516a/" target="_blank" className="link-social linkedin">
            <FaLinkedinIn />
          </Link>
        </li>
        <li className="links">
          <Link to="https://github.com/FilipeGabrielRocha" target="_blank" className="link-social github">
            <FaGithub />
          </Link>
        </li>
        <li className="links">
          <Link to="https://www.instagram.com/_filiperochaa/" target="_blank" className="link-social instagram">
            <FaInstagram />
          </Link>
        </li>
        <li className="links">
          <Link to="https://filipegabrielrocha.github.io/portfolio/" target="_blank" className="link-social site">
            <FaServer />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
