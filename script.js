const toggleButton = document.getElementById("toggleProjects");
const projectList = document.getElementById("projectList");

const projetos = [
  {
    nome: "Reflex Master",
    descricao: "Jogo de reflexo rapido com aumento de velocidade progressivo.",
    link: "https://alexandre-silva-ribeiro.github.io/reflex-master/"
  }
];

let rendered = false;

function renderizarProjetos() {
  if (rendered) {
    return;
  }

  projetos.forEach((projeto) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `${projeto.nome} - abrir projeto`);

    const nome = document.createElement("h3");
    nome.className = "project-name";
    nome.textContent = projeto.nome;

    const descricao = document.createElement("p");
    descricao.className = "project-description";
    descricao.textContent = projeto.descricao;

    const botao = document.createElement("a");
    botao.className = "open-project";
    botao.href = projeto.link;
    botao.textContent = "Abrir Projeto";
    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
    botao.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    card.addEventListener("click", () => {
      window.location.href = projeto.link;
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = projeto.link;
      }
    });

    card.append(nome, descricao, botao);
    projectList.appendChild(card);
  });

  rendered = true;
}

function alternarProjetos() {
  const shouldOpen = !projectList.classList.contains("is-open");

  if (shouldOpen) {
    renderizarProjetos();
  }

  projectList.classList.toggle("is-open", shouldOpen);
  toggleButton.setAttribute("aria-expanded", String(shouldOpen));
  toggleButton.textContent = shouldOpen ? "Ocultar Projetos" : "Meus Projetos";
}

toggleButton.addEventListener("click", alternarProjetos);
