import "./fundo-modal-pc.css"

const abrirModal = (conteudo) => {
  const modal = document.querySelector(".modal");
  const telaModal = document.querySelector(".tela");
  const fundoModal = conteudo.target.classList[1] + "-pc";

  modal.classList.add("aberto");
  telaModal.classList.add(fundoModal);
};

export { abrirModal };
