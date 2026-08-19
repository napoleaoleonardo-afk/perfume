// Interatividade da Pirâmide Olfativa
function showNote(type) {
  const detailBox = document.getElementById('note-detail');

  const notes = {
    top: {
      title: "Notas de Topo (Saída)",
      time: "Duram de 5 a 15 minutos",
      desc: "Primeira impressão do perfume. Ingredientes leves e voláteis como cítricos (limão, bergamota) e ervas."
    },
    heart: {
      title: "Notas de Coração (Corpo)",
      time: "Duram de 2 a 4 horas",
      desc: "A alma do perfume. Surgem assim que as notas de topo evaporam. Geralmente florais, frutais ou especiarias."
    },
    base: {
      title: "Notas de Fundo (Base)",
      time: "Duram 6 horas ou mais",
      desc: "A fixação na pele. Moléculas mais pesadas que demoram a evaporar, como madeiras, resinas, baunilha e âmbar."
    }
  };

  const selected = notes[type];
  detailBox.innerHTML = `
    <strong>${selected.title}</strong> - <em>${selected.time}</em><br>
    <p>${selected.desc}</p>
  `;
}

// Lógica do Quiz
function calculatePerfume() {
  const occasion = document.getElementById('occasion').value;
  const sensation = document.getElementById('sensation').value;
  const resultBox = document.getElementById('quiz-result');

  if (!occasion || !sensation) {
    alert("Por favor, responda a todas as perguntas!");
    return;
  }

  let resultText = "";

  if (sensation === "fresh" || occasion === "hot") {
    resultText = "<strong>Sua combinação ideal: Família Cítrica ou Aromática.</strong><br>Perfumes leves, perfeitos para o dia a dia, trazendo frescor com notas de bergamota, lavanda e folhas verdes.";
  } else if (sensation === "sweet" || occasion === "night") {
    resultText = "<strong>Sua combinação ideal: Família Oriental / Gourmand.</strong><br>Fragrâncias marcantes e envolventes, com notas de baunilha, âmbar e especiarias doces.";
  } else {
    resultText = "<strong>Sua combinação ideal: Família Amadeirada ou Floral.</strong><br>Fragrâncias versáteis e elegantes, com notas de cedro, sândalo ou florais estruturados.";
  }

  resultBox.innerHTML = resultText;
  resultBox.classList.remove('hidden');
}