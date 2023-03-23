const result = window.document.querySelector('.infos')

function buscarCep() {
    let cep = document.getElementById('input').value

    if (cep.length !== 8){
        alert('CEP inválido')
        return
    }

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(function(response){
        response.json()
        .then(mostrar)
        })
}

function mostrar(dados){

    if (dados.erro) {
        alert('Não foi possível localizar CEP')
        return
    }

    result.innerHTML = `<b>Endereço:</b> ${dados.logradouro}<br>
                        <b>Localidade:</b> ${dados.localidade}<br>
                        <b>Bairro:</b> ${dados.bairro}<br>
                        <b>Estado:</b> ${dados.uf}`
}