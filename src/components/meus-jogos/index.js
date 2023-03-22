import "./index.css";
import { useState } from "react";
import { abrirModal } from "./services/abrir-modal";

const MeusJogos = () => {
  const [teste, setTeste] = useState({
    caixaJogos: [
      "anthem",
      "apex-legends",
      "destiny",
      "elite-dangerous",
      "god-of-war",
      "grand-chase",
      "lunia-z",
      "minecraft",
      "path-of-exile",
      "runescape",
      "speed-racer",
      "star-craft-2",
      "the-last",
      "titan-fall-2",
      "uncharted",
    ],
  });

  return (
    <div>
      <ul className="container-jogos">
        {teste.caixaJogos.map((caixaJogo, index) => {
          return <li className={`jogo ${caixaJogo}`} key={index} onClick={abrirModal}></li>;
        })}
      </ul>
    </div>
    // <div className="container-jogos">
    //   <div className="jogo anthem">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo apex-legends">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo destiny">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo elite-dangerous">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo god-of-war">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo grand-chase">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo lunia-z">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo minecraft">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo path-of-exile">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo runescape">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo speed-racer">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo star-craft-2">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo the-last">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo titan-fall-2">
    //     <Link></Link>
    //   </div>
    //   <div className="jogo uncharted">
    //     <Link></Link>
    //   </div>
    // </div>
  );
};

export { MeusJogos };
