const areaDoCodigo = document.querySelector('.codigo-wrapper');
const linguagem = document.querySelector('.linguagem');
const botao = document.querySelector('.botao-highlight');

function mudaLinguagem(){
    const codigo = areaDoCodigo.querySelector('code');
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"</code>`;
    areaDoCodigo.firstChild.innerText = codigo.innerText;
}

linguagem.addEventListener('change', () => {
    mudaLinguagem();
});

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code');
    hljs.highlightBlock(codigo);
})