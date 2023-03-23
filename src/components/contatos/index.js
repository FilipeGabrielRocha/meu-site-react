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
        <p className="email-meus-contatos">
          <span className="span-meus-contatos">E-mail:</span>
          <br /> filiperochaprogramador@gmail.com
        </p>
        <ul className="lista-meus-contatos">
          <li>
            <Link
              to={"https://github.com/FilipeGabrielRocha"}
              target="_blank"
              className="meus-contatos github"
            >
              <FaGithub /> - Github
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.instagram.com/_filiperochaa/"}
              target="_blank"
              className="meus-contatos instagram"
            >
              <FaInstagram /> - Instagram
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.linkedin.com/in/filipe-gabriel-rocha-a4446516a/"}
              target="_blank"
              className="meus-contatos linkedin"
            >
              <FaLinkedinIn /> - LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to={"https://filipegabrielrocha.github.io/portfolio/"}
              target="_blank"
              className="meus-contatos site"
            >
              <FaServer /> - Meu Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Contatos };
