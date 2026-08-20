async function carregarShows() {
    const container = document.getElementById("show-list");

    try {
        const response = await fetch("assets/data/shows.json");
        if (!response.ok) throw new Error(`Erro ao buscar os shows: ${response.status}`); {

            const shows = await response.json();
            shows.sort((a, b) => new Date(a.data) - new Date(b.data));

            renderizarShows(shows, container);
        }
        } catch (error) {
            console.error("Erro ao carregar shows:", error);
            container.innerHTML = `<p class="error-show">Erro ao carregar shows. Por favor, tente novamente mais tarde.</p>`;
        }
    }


    function renderizarShows(shows, container) {
        container.innerHTML = "";
    }

    function formatarData(dataISO) {
  const data = new Date(dataISO + 'T00:00:00');
  return data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function renderizarShows(shows, container) {
  if (shows.length === 0) {
    container.innerHTML = `<p class="shows-vazio">Nenhum show agendado no momento.</p>`;
    return;
  }

  container.innerHTML = shows.map(show => `
    <article class="show-card" data-status="${show.status}">
      <div class="show-data">${formatarData(show.data)}</div>
      <div class="show-info">
        <h3 class="show-local">${show.local}</h3>
        <p class="show-cidade">${show.cidade}</p>
      </div>
      <div class="show-acao">
        ${show.ingressoUrl
          ? `<a href="${show.ingressoUrl}" class="btn-ingresso" target="_blank" rel="noopener">Ingressos</a>`
          : `<span class="show-status-tag">${show.status}</span>`
        }
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', carregarShows);