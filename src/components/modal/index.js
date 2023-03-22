import "./index.css";
import "./services/fechar-modal";
import { fecharModal } from "./services/fechar-modal";

const Modal = () => {
  return (
    <div className="modal">
      <div className="conteudo-modal">
        <span onClick={fecharModal} className="fechar-modal">X</span>
        <div className="tela"></div>
      </div>
    </div>
  );
};

export { Modal };
