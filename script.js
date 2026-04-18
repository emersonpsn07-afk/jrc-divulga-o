document.addEventListener("DOMContentLoaded", () => {

  // Saudação
  const hora = new Date().getHours();
  let saudacao = "";

  if (hora < 12) saudacao = "Bom dia!";
  else if (hora < 18) saudacao = "Boa tarde!";
  else saudacao = "Boa noite!";

  console.log(`${saudacao} Bem-vindo ao site da JRC Divulgação.`);


  // Reveal Animation
  const reveals = document.querySelectorAll(".reveal");

  function revelarAoScroll() {
    const alturaTela = window.innerHeight;

    reveals.forEach((secao) => {
      const topo = secao.getBoundingClientRect().top;

      if (topo < alturaTela - 120) {
        secao.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revelarAoScroll);
  revelarAoScroll();


  // MENU MOBILE
  const menuBtn = document.getElementById("menuMobileBtn");
  const menuBox = document.getElementById("menuMobileBox");

  menuBtn.addEventListener("click", () => {
    if (menuBox.style.display === "flex") {
      menuBox.style.display = "none";
    } else {
      menuBox.style.display = "flex";
    }
  });

  const linksMobile = menuBox.querySelectorAll("a");
  linksMobile.forEach((link) => {
    link.addEventListener("click", () => {
      menuBox.style.display = "none";
    });
  });


  // MODAL GALERIA (ZOOM)
  const fotos = document.querySelectorAll(".foto img");
  const modal = document.getElementById("modalGaleria");
  const modalImg = document.getElementById("modalImg");
  const modalClose = document.getElementById("modalClose");

  fotos.forEach((foto) => {
    foto.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = foto.src;
      modalImg.alt = foto.alt;
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


  // FORMULÁRIO ENVIAR PARA WHATSAPP
  const form = document.getElementById("formOrcamento");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const empresa = document.getElementById("empresa").value;
    const tipo = document.getElementById("tipo").value;
    const duracao = document.getElementById("duracao").value;
    const mensagem = document.getElementById("mensagem").value;

    let texto = `Olá! Gostaria de solicitar um orçamento.%0A%0A`;
    texto += `👤 Nome: ${nome}%0A`;

    if (empresa.trim() !== "") {
      texto += `🏢 Empresa: ${empresa}%0A`;
    }

    texto += `📢 Tipo de divulgação: ${tipo}%0A`;

    if (duracao.trim() !== "") {
      texto += `⏳ Duração: ${duracao}%0A`;
    }

    if (mensagem.trim() !== "") {
      texto += `%0A📝 Mensagem: ${mensagem}%0A`;
    }

    texto += `%0AObrigado!`;

    const numeroWhats = "5519988587512";
    const link = `https://wa.me/${numeroWhats}?text=${texto}`;

    window.open(link, "_blank");
  });

});