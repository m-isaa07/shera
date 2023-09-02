
const personagem = document.querySelectorAll ('.personagem');

personagem.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
      if(window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }

const personagemSelecionado = document.querySelector ('.selecionado');
personagemSelecionado.classList.remove('selecionado')

       personagem.classList.add('selecionado');

const imagemPersonagemGrande = document.querySelector('.personagem-grande');

const idPersonagem = personagem.attributes.id.value;
imagemPersonagemGrande.src = `./S.shera/imagens/shera/${idPersonagem}-grande.png`;

const nomePersonagem = document.getElementById('nome-personagem');

nomePersonagem.innerText = personagem.getAttribute ('data-name');

const descricaoPersonagem = document.getElementById('descricao-personagem');

descricaoPersonagem.innerText = personagem.getAttribute('data-descricao')

     })
})
