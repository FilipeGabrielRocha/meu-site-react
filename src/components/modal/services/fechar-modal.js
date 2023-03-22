const fecharModal = () => {
  const modal = document.querySelector(".modal");
  const tela = document.querySelector(".tela");
  const tirandoClasse = tela.classList[1];

  modal.classList.remove("aberto");
  tela.classList.remove(tirandoClasse);
};

export { fecharModal };
