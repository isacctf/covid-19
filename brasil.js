const apiEstados = 'https://covid19-brazil-api.now.sh/api/report/v1';
const apiBrasil = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
const tableBrasilEl = document.querySelector('#casosBrasil');
const tableEstadosEl = document.querySelector('#casosEstados');

fetch(apiBrasil)
    .then(r => r.json())
    .then(r => casosBrasil(r.data))

fetch(apiEstados)
    .then(r => r.json())
    .then(r => casosEstados(r.data))
    

function casosBrasil(dadosBrasil){

    let trBrasilEl = document.createElement('tr');
    let td1BrasilEl = document.createElement('td');
    let td2BrasilEl = document.createElement('td');
    let td3BrasilEl = document.createElement('td');
    
    tableBrasilEl.appendChild(trBrasilEl);
    trBrasilEl.appendChild(td1BrasilEl);
    trBrasilEl.appendChild(td2BrasilEl);
    trBrasilEl.appendChild(td3BrasilEl);
    td1BrasilEl.innerHTML = `${dadosBrasil.confirmed}`;
    td2BrasilEl.innerHTML = `${dadosBrasil.deaths}`;
    td3BrasilEl.innerHTML = `${dadosBrasil.recovered}`;
}

function casosEstados(dadosEstados){
    let i = 0;

    for(i; i < 27; i++){

        let trEstadosEl = document.createElement('tr');
        let td1EstadosEl = document.createElement('td');
        let td2EstadosEl = document.createElement('td');
        let td3EstadosEl = document.createElement('td');    

        tableEstadosEl.appendChild(trEstadosEl);
        trEstadosEl.appendChild(td1EstadosEl);
        trEstadosEl.appendChild(td2EstadosEl);
        trEstadosEl.appendChild(td3EstadosEl);
        td1EstadosEl.innerHTML = `${dadosEstados[i].state}`;
        td2EstadosEl.innerHTML = `${dadosEstados[i].cases}`;
        td3EstadosEl.innerHTML = `${dadosEstados[i].deaths}`;                
    }

}
