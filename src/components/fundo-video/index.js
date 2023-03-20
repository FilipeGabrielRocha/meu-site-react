import "./index.css"
import videoUniversoMeteoros from "../../assets/video/universo-meteoros.mp4"

const FundoVideo = () => {
  return (
    <div className="video-fundo">
      <video className="video" autoPlay loop muted>
        <source src={videoUniversoMeteoros} type="video/mp4" />
      </video>
    </div>
  );
};

export { FundoVideo };
