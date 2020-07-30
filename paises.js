const api = 'https://covid19-brazil-api.now.sh/api/report/v1/countries';
const tableMundoEl = document.querySelector('#casosMundo');

fetch(api)
    .then(r => r.json())
    .then(r => casosMundiais(r.data))

function casosMundiais(dadosMundiais){
    let i = 0;

    for(i; i < 188; i++){

        let trMundoEl = document.createElement('tr');
        let td1MundoEl = document.createElement('td');
        let td2MundoEl = document.createElement('td');
        let td3MundoEl = document.createElement('td');
        let td4MundoEl = document.createElement('td');    

        tableMundoEl.appendChild(trMundoEl);
        trMundoEl.appendChild(td1MundoEl);
        trMundoEl.appendChild(td2MundoEl);
        trMundoEl.appendChild(td3MundoEl);
        trMundoEl.appendChild(td4MundoEl);
        td1MundoEl.innerHTML = `${dadosMundiais[i].country}`;
        td2MundoEl.innerHTML = `${dadosMundiais[i].confirmed}`;
        td3MundoEl.innerHTML = `${dadosMundiais[i].deaths}`;
        td4MundoEl.innerHTML = `${dadosMundiais[i].recovered}`;                
    }

}
    