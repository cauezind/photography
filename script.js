// Seleciona os elementos
const openModalDiv = document.getElementById('open-menu');
const modal = document.getElementById('menu-modal');
const modalcontent = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('.close-btn');

// Função para abrir o modal
openModalDiv.addEventListener('click', () => {
    modal.style.display = 'block';
    //modalcontent.style.height = '100%';
    setTimeout(() => { // Adiciona um pequeno atraso para garantir a transição
        modal.classList.add('show'); // Adiciona a classe para ativar a transição
    }); // Pequeno delay para evitar problema de renderização
});

// Função para fechar o modal ao clicar no botão de fechar
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    setTimeout(() => {modal.classList.remove('show');}) // Remove a classe para iniciar a transição de saída
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
        modal.classList.remove('show'); // Remove a classe para iniciar a transição de saída
    }
});