document.addEventListener("DOMContentLoaded", function () {
  // Troca de temas
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.className = btn.dataset.theme;
    });
  });

  // quiz
  const perguntas = [
    {
      pergunta: "O que pode causar uma enchente urbana?",
      opcoes: [
        "Aumento do turismo",
        "Acúmulo de lixo e falta de drenagem",
        "Uso de bicicletas",
        "Redução do desmatamento",
      ],
      resposta: 1,
    },
    {
      pergunta: "Qual atitude ajuda a prevenir enchentes?",
      opcoes: [
        "Jogar lixo nas ruas",
        "Desmatar áreas verdes",
        "Construir em áreas de risco",
        "Manter bueiros limpos",
      ],
      resposta: 3,
    },
    {
      pergunta: "Durante uma enchente, o que você NÃO deve fazer?",
      opcoes: [
        "Evitar áreas alagadas",
        "Procurar abrigo em lugar alto",
        "Entrar em água com correnteza",
        "Ouvir alertas da defesa civil",
      ],
      resposta: 2,
    },
    {
      pergunta: "O que é um bueiro e qual sua função?",
      opcoes: [
        "Uma caixa de esgoto doméstico",
        "Um ponto de coleta de água da chuva para drenagem",
        "Uma estrutura para armazenar lixo",
        "Um sistema de irrigação agrícola",
      ],
      resposta: 1,
    },
    {
      pergunta: "Como o desmatamento pode influenciar nas enchentes?",
      opcoes: [
        "Aumentando a absorção da água pelo solo",
        "Reduzindo a velocidade das águas",
        "Diminuindo a infiltração da água e aumentando o escoamento superficial",
        "Não tem relação com enchentes",
      ],
      resposta: 2,
    },
    {
      pergunta:
        "Por que é importante evitar construir em áreas de risco de enchente?",
      opcoes: [
        "Porque encarece o imóvel",
        "Porque pode causar danos materiais e risco à vida",
        "Porque aumenta o valor do terreno",
        "Porque facilita o acesso a serviços",
      ],
      resposta: 1,
    },
    {
      pergunta:
        "Qual a importância da vegetação nas áreas urbanas para o controle das enchentes?",
      opcoes: [
        "Ela evita a poluição do ar",
        "Ela aumenta a evaporação e ajuda na absorção da água da chuva",
        "Ela não tem efeito sobre enchentes",
        "Ela torna o solo mais duro",
      ],
      resposta: 1,
    },
    {
      pergunta: "O que a população pode fazer para ajudar a evitar enchentes?",
      opcoes: [
        "Descartar lixo corretamente e manter bueiros limpos",
        "Construir muros altos nas calçadas",
        "Fechar bueiros para evitar entrada de água",
        "Plantar árvores somente no campo",
      ],
      resposta: 0,
    },
    {
      pergunta:
        "Qual órgão geralmente é responsável por alertar sobre enchentes?",
      opcoes: [
        "Prefeitura Municipal",
        "Defesa Civil",
        "Polícia Militar",
        "Corpo de Bombeiros",
      ],
      resposta: 1,
    },
    {
      pergunta:
        "Após uma enchente, qual cuidado é importante para evitar doenças?",
      opcoes: [
        "Beber água da enchente",
        "Evitar contato com água contaminada e procurar ajuda médica",
        "Dormir em áreas alagadas",
        "Consumir alimentos estragados",
      ],
      resposta: 1,
    },
  ];

  let atual = 0;
  let pontos = 0;

  function mostrarPergunta() {
    const q = perguntas[atual];
    document.getElementById("question-title").textContent = q.pergunta;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.opcoes.forEach((opcao, i) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="resposta" value="${i}"> ${opcao}`;
      optionsDiv.appendChild(label);
    });

    document.getElementById("result").textContent = "";
    document.getElementById("nextBtn").textContent =
      atual === perguntas.length - 1 ? "Finalizar" : "Próxima";
    document.getElementById("nextBtn").style.display = "";
  }

  function nextQuestion() {
    const selecionado = document.querySelector(
      'input[name="resposta"]:checked'
    );
    if (!selecionado) {
      alert("Por favor, escolha uma resposta.");
      return;
    }

    const resposta = parseInt(selecionado.value);
    if (resposta === perguntas[atual].resposta) {
      pontos++;
    }

    atual++;

    if (atual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }

  function mostrarResultado() {
    document.getElementById("question-title").textContent = "Quiz finalizado!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById(
      "result"
    ).textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
  }

  // Inicializa
  mostrarPergunta();

  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
});
