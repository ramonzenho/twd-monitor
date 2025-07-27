
async function fetchBosses() {
  try {
    const response = await fetch("bosses.json");
    const data = await response.json();
    const list = document.getElementById("boss-list");
    list.innerHTML = "";

    const alarm = document.getElementById("alarm");

    data.forEach(boss => {
      const li = document.createElement("li");
      li.textContent = boss.nome + " - " + boss.status;
      if (boss.status.toUpperCase() === "VIVO") {
        li.classList.add("vivo");
        alarm.play();
        alert("⚠️ BOSS VIVO: " + boss.nome);
      }
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao carregar bosses:", error);
  }
}

function manualUpdate() {
  fetchBosses();
}

window.onload = fetchBosses;
