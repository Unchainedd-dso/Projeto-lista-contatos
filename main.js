const form = document.getElementById('insira-contato')
let linhas = ''

form.addEventListener('submit',function(e){
    e.preventDefault()

    let contatos = document.getElementById('contatos')
    const nomeContato = document.getElementById('nome-contato')
    const telefoneContato = document.getElementById('telefone')

    let linha = `<tr>`
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${telefoneContato.value}</td>`
    linha += `</tr>`

    linhas += linha
    contatos.innerHTML = linhas

    nomeContato.value = ''
    telefoneContato = ''

})