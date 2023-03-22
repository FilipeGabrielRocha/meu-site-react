import "./index.css";

const SobreMim = () => {
  return (
    <div className="container">
      <div className="div-foto-minha-perfil">
        <div className="foto-minha-perfil"></div>
      </div>
      <div className="sobre-mim">
        <p>Oi, Meu nome é Filipe Gabriel Rocha, seja bem-vindo(a)!</p>

        <p>
          Sou apaixonado por tecnologia, entrei na área de estudo da programação
          desde 2020, comecei por backend, mas quando tive um contato com
          frontend foi o momento que realmente vi que queria seguir carreira por
          lá, desde então estou estudando as tecnologias <span>HTML</span>,{" "}
          <span>CSS</span> e <span>JavaScript</span> e me aventurando nos
          frameworks.
        </p>

        <div className="container-info-minha">
          <div className="info-minha">
              <p>
                <strong>Nome:</strong> Filipe Gabriel Rocha<br />
                <strong>Nascimento:</strong> 14/11/2000<br />
                <strong>Idade: </strong>
                <span id="idade"></span> anos<br />
                <strong>Estado Civil</strong>: Solteiro<br />
                <strong>Estado Social:</strong> Namorando<br />
                <strong>Hobbie:</strong> Jogar jogos eletrônicos
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SobreMim };
