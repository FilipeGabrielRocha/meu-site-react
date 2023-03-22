import { Footer } from "../footer";
import { FundoVideo } from "../fundo-video";
import { Header } from "../header";
import { Info } from "../info";
import { MeusJogos } from "../meus-jogos";
import { Modal } from "../modal";
import { SobreMim } from "../sobre-mim";

const Home = () => {
  return (
    <>
      <Modal />
      <FundoVideo />
      <Header />
      <Info />
      <SobreMim />
      <MeusJogos />
      <Footer />
    </>
  );
};

export { Home };
