import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Contato } from "./contato";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
