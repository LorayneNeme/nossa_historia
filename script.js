document.addEventListener('DOMContentLoaded', () => {
    // Data do início do namoro (ano, mês-1, dia)
    const inicioNamoro = new Date(2025, 5, 21); // 21 de junho de 2025
    const diasElement = document.getElementById('diasJuntos');

    function atualizarContador() {
        const hoje = new Date();
        const diffTime = hoje - inicioNamoro; // Diferença em milissegundos
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Converter para dias
        diasElement.textContent = `${diffDays} dias juntos`;
    }

    // Atualiza o contador imediatamente
    atualizarContador();

    // Atualiza o contador a cada 24 horas
    setInterval(atualizarContador, 1000 * 60 * 60 * 24);

    // Botão de entrada e música
    const entrarBtn = document.getElementById('entrarBtn');
    const musica = document.getElementById('musicaFundo');

    entrarBtn.addEventListener('click', () => {
        musica.play().catch((error) => {
            console.error('Erro ao tentar reproduzir a música:', error);
        });

        criarMensagem("EuTeAmo💖");
    });

    // Função para criar mensagens animadas
    function criarMensagem(texto) {
        const msg = document.createElement('span');
        msg.textContent = texto;
        msg.className = 'mensagem-animada';

        // Posição aleatória na tela
        msg.style.left = Math.random() * (window.innerWidth - 100) + "px";
        msg.style.top = Math.random() * (window.innerHeight - 50) + "px";

        document.body.appendChild(msg);

        // Remover a mensagem após a animação
        setTimeout(() => {
            msg.remove();
        }, 3000); // Duração da animação
    }

    // Animação das seções ao rolar a página
    const secoes = document.querySelectorAll('.secao');

    function animarSecoes() {
        secoes.forEach(secao => {
            const rect = secao.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                secao.classList.add('ativo');
            }
        });
    }

    window.addEventListener('scroll', animarSecoes);
    window.addEventListener('load', animarSecoes);

    // Imagem da galeria em tamanho maior
    const imagens = document.querySelectorAll('.galeria img');

    imagens.forEach(img => {
        img.addEventListener('click', () => {
            // Criar um overlay escuro
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.addEventListener('click', () => overlay.remove()); // Fechar ao clicar

            // Criar a imagem em tamanho maior
            const imgGrande = document.createElement('img');
            imgGrande.src = img.src;
            imgGrande.className = 'img-grande';

            overlay.appendChild(imgGrande);
            document.body.appendChild(overlay);
        });
    });

    // Animação de corações
    const container = document.getElementById('particulas');

    function criarCoracao() {
        const coracao = document.createElement('div');
        coracao.className = 'coracao';

        // Posição aleatória horizontal
        coracao.style.left = Math.random() * window.innerWidth + 'px';
        // Tamanho aleatório
        const tamanho = 10 + Math.random() * 15;
        coracao.style.width = tamanho + 'px';
        coracao.style.height = tamanho + 'px';
        // Velocidade aleatória
        coracao.style.animationDuration = 5 + Math.random() * 5 + 's';

        container.appendChild(coracao);

        // Remove o coração depois da animação
        setTimeout(() => {
            coracao.remove();
        }, parseFloat(coracao.style.animationDuration) * 1000);
    }

    // Cria corações periodicamente
    setInterval(criarCoracao, 500);
});