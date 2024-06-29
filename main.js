document.getElementById('formularioContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const tabelaContatos = document.getElementById('tabelaContatos');
    const novaLinha = tabelaContatos.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    // Limpa os campos do formulário após adicionar o contato
    document.getElementById('formularioContato').reset();
});
