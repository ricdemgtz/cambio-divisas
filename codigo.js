function start() {
    obtenerDatos(cargarDatos);

    cargarElementos();

    cargarTextos();
}

async function obtenerDatos(callback) {

    await dalay(2500);

    let respuestaBTC = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    callback(await respuestaBTC.json());

    let respuestaDolar = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosUSD = await respuestaDolar.json();
    document.getElementById("UsdEur").append(datosUSD.rates.EUR);

    let respuestaARS = await crearPedido('https://open.er-api.com/v6/latest/ARS');
    document.getElementById("UsdArs").append(respuestaARS.rates.USD);

    document.getElementById("imgEspera").style.visibility = "hidden"
}

function cargarDatos(datos) {
    document.getElementById("bitcoinUsd").append(datos.bpi.USD.rate);
}

function crearPedido(url) {
    return new Promise(function(resolve,reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function(){
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
}

function cargarElementos() {
    document.getElementById("imgLogo").setAttribute("src", "logo.jpg");
    document.getElementById("titulo").textContent = "Cotizaciones Online"
    document.getElementById("imgEspera").setAttribute("src", "loading.gif");
    document.getElementById("imgEspera").style.visibility = "visible"
}

function cargarTextos() {
    document.getElementById("UsdEur").append("EUR a USD: ");
    document.getElementById("UsdArs").append("ARS a USD: ");
    document.getElementById("bitcoinUsd").append("Bitcoun a USD: ");
}

function dalay(ms) {
    return new Promise(function(res) {
        setTimeout(res, ms);
    })
}



