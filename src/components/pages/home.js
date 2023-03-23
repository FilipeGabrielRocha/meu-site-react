import { Footer } from "../footer";
import { FundoVideo } from "../fundo-video";
import { Header } from "../header";
import { Info } from "../info";
import { MeusJogos } from "../meus-jogos";
import { Modal } from "../modal";
import { SobreMim } from "../sobre-mim";
import { calcIdade } from "../sobre-mim/services/idade";

const Home = () => {
  return (
    <div onLoad={calcIdade}>
      <Modal />
      <FundoVideo />
      <Header />
      <Info />
      <SobreMim />
      <MeusJogos />
      <Footer />
    </div>
  );
};

export { Home };
