// Criação de Variable CEP pegando o input com id = "cep"
const cep = document.getElementById('cep');

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}
// Evento: quando sai do input fazer o seguinte
cep.addEventListener('blur', (e) => {
    let search = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    // Promessa para trazer o CEP
    fetch(`http://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => console.log(`Erro:` + e, message))
});