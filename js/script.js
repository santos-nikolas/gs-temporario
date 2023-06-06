alert('Seja bem-vindo(a)!')

// =============================== MENU MOBILE ===============================
function animar() {
    const btnMenu = document.querySelector("#btn-menu")
    const menuDiv = document.querySelector("#menu-mobile")
    btnMenu.classList.toggle("ativar")
    menuDiv.classList.toggle("abrir")
}

// =============================== DARK MODE ===============================
const btn = document.getElementById('btn-tema');
const body = document.body;
const imagemTema = document.getElementById('imagem-tema');
const logoApagado = document.querySelector('#logo-apagado');
let modoEscuro = false;
btn.addEventListener("click", () => {
  if (!modoEscuro) {
    modoEscuro = true;
    body.classList.add("dark");
    dataHora.classList.add('dark')
    imagemTema.src = 'img/sol-icon-removebg-preview.png';
    imagemTema.alt = 'sol(light-mode)';
    logoApagado.src = 'img/Logo(SemFundo)padrao.png'

  } else {
    modoEscuro = false;
    body.classList.remove("dark");
    dataHora.classList.remove('dark')
    imagemTema.src = 'img/lua-icon-removebg-preview.png';
    imagemTema.alt = 'lua(dark-mode)';
    logoApagado.src = 'img/Logo(SemFundo)preto.png'
  }
});

// =============================== DATA E HORA ===============================
const dataHora = document.querySelector('#data-hora');
// Obtém a referência para o elemento HTML onde a data e hora serão exibidas
var dataHoraElemento = document.getElementById('data-hora');

// Função que atualiza a data e hora a cada segundo
function atualizarDataHora() {
  var dataHora = new Date(); // Cria um novo objeto Date

  // Obtém a data, horas e minutos
  var data = dataHora.toLocaleDateString();
  var horas = dataHora.getHours();
  var minutos = dataHora.getMinutes();
  
  // Formata a data, hora e minutos no formato desejado
  var dataHoraFormatada = data + ' ' + horas.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0');
  
  // Atualiza o conteúdo do elemento HTML com a data e hora atualizadas
  dataHoraElemento.textContent = dataHoraFormatada;
}

// Chama a função inicialmente para exibir a data e hora imediatamente
atualizarDataHora();

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);



// =============================== CARROSSEL ===============================
const radio = document.querySelector(".manual-btn")
let cont = 1

document.querySelector("#radio1").checked = true

setInterval(()=> {
    proximaImg()
}, 4000)

function proximaImg() {
    cont++

    if(cont > 4) {
        cont = 1
    }

    document.querySelector("#radio"+cont).checked = true
}


