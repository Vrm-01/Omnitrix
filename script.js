const selectAlien = document.getElementById('alien-select');
const btnTransformar = document.getElementById('btn-transformar');
const painel = document.getElementById('painel-resultado');
const container = document.querySelector('.omnitrix-container');
const simbolo = document.getElementById('simbolo'); // Elemento da imagem da ampulheta

btnTransformar.addEventListener('click', buscarAlien);

async function buscarAlien() {
    const alienId = selectAlien.value;

    // Voltar para a imagem branca e remover estado ativado em novas buscas
    container.classList.remove('ativado');
    simbolo.src = 'omnitrix-desativado.png';

    if (!alienId) {
        painel.innerHTML = '<p class="erro">Aviso: Selecione um alien válido no disco!</p>';
        return;
    }

    painel.innerHTML = '<p class="loading">Sincronizando DNA alienígena...</p>';

    try {
        const resposta = await fetch(`http://localhost:3000/aliens/${alienId}`);

        if (!resposta.ok) {
            throw new Error('DNA corrompido ou não encontrado no sistema.');
        }

        const dados = await resposta.json();

        // Altera a borda do container para verde e troca a ampulheta para a imagem verde
        container.classList.add('ativado');
        simbolo.src = 'omnitrix-ativado.png';

        painel.innerHTML = `
            <div class="alien-card">
                <img src="${dados.imagem}" alt="${dados.nome}" class="alien-img">
                <h2>${dados.nome}</h2>
                <p><strong>Espécie:</strong> ${dados.especie}</p>
                <p><strong>Planeta:</strong> ${dados.planeta}</p>
                <p><strong>Habilidades:</strong> ${dados.habilidades}</p>
            </div>
        `;
    } catch (erro) {
        // Mantém a imagem branca em caso de erro
        container.classList.remove('ativado');
        simbolo.src = 'omnitrix-desativado.png';
        painel.innerHTML = `<p class="erro">Falha no Omnitrix: ${erro.message}</p>`;
    }
}