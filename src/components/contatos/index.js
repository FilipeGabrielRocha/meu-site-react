import "./index.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contatos = () => {
  return (
    <div className="container-meu-contato">
      <div class="container-meus-contatos">
        <h1 className="titulo-meus-contatos">Meus Contatos</h1>
        <ul className="lista-meus-contatos">
          <li>
            <Link className="meus-contatos github">
              <FaGithub /> - Github
            </Link>
          </li>
          <li>
            <Link className="meus-contatos instagram">
              <FaInstagram /> - Instagram
            </Link>
          </li>
          <li>
            <Link className="meus-contatos linkedin">
              <FaLinkedinIn /> - LinkedIn
            </Link>
          </li>
          <li>
            <Link className="meus-contatos site">
              <FaServer /> - Meu Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Contatos };
