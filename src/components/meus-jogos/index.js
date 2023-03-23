import "./index.css";
import { useState } from "react";
import { abrirModal } from "./services/abrir-modal";

const MeusJogos = () => {
  const [meusJogos] = useState({
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
        {meusJogos.caixaJogos.map((caixaJogo, index) => {
          return (
            <li
              className={`jogo ${caixaJogo}`}
              key={index}
              onClick={abrirModal}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export { MeusJogos };
