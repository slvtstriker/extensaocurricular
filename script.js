//exemplo de funcionalidade

document.addEventListener('DOMContentLoaded', () => {
    const animaisDisponiveis = [
        { nome: 'Bobby', especie: 'Cachorro', raca: 'Labrador', idade: 3, sexo: 'Macho', descricao: 'Amigável e brincalhão' },
        { nome: 'Mimi', especie: 'Gato', raca: 'Siamês', idade: 2, sexo: 'Fêmea', descricao: 'Carinhosa e tranquila' }
    ];

    const container = document.getElementById('animais-disponiveis');
    if (container) {
        animaisDisponiveis.forEach(animal => {
            const animalDiv = document.createElement('div');
            animalDiv.classList.add('animal');
            animalDiv.innerHTML = `
                <h3>${animal.nome}</h3>
                <p><strong>Espécie:</strong> ${animal.especie}</p>
                <p><strong>Raça:</strong> ${animal.raca}</p>
                <p><strong>Idade:</strong> ${animal.idade} anos</p>
                <p><strong>Sexo:</strong> ${animal.sexo}</p>
                <p>${animal.descricao}</p>
            `;
            container.appendChild(animalDiv);
        });
    }
});
