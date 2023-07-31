

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Etanol';
const consumoMedio = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / consumoMedio;

if (tipoCombustivel === 'Etanol') {
    const valorTotal = litrosConsumidos * precoEtanol;
    console.log(valorTotal.toFixed(2));
} else {
    const valorTotal = litrosConsumidos * precoGasolina;
    console.log(valorTotal.toFixed(2));
}

