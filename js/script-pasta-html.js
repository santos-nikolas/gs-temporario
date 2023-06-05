function animar() {
    const btnMenu = document.querySelector("#btn-menu")
    const menuDiv = document.querySelector("#menu-mobile")
    btnMenu.classList.toggle("ativar")
    menuDiv.classList.toggle("abrir")
}

const btn = document.getElementById('btn-tema');
const body = document.body;
const imagemTema = document.getElementById('imagem-tema');
const logoApagado = document.querySelector('#logo-apagado')
let modoEscuro = false;
btn.addEventListener("click", () => {
  if (!modoEscuro) {
    modoEscuro = true;
    body.classList.add("dark");
    imagemTema.src = '../img/sol-icon-removebg-preview.png';
    imagemTema.alt = 'sol(light-mode)';
    logoApagado.src = '../img/Logo(SemFundo)padrao.png'
  } else {
    modoEscuro = false;
    body.classList.remove("dark");
    imagemTema.src = '../img/lua-icon-removebg-preview.png';
    imagemTema.alt = 'lua(dark-mode)';
    logoApagado.src = '../img/Logo(SemFundo)preto.png'
  }
});
