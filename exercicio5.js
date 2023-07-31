
/* Minha resolução
const valorProduto = 100;
const formaPagamento = 'parcela4x';

if(formaPagamento === 'Débito'){
    const valorTotal = valorProduto - (valorProduto * 0.10);
    console.log(valorTotal);
}else if(formaPagamento === 'Dinheiro'){
    const valorTotal = valorProduto - (valorProduto * 0.15);
    console.log(valorTotal);
}else if(formaPagamento === 'parcela2x'){
    const valorTotal = valorProduto;
    console.log(valorTotal);
}else{
    const valorTotal = valorProduto + (valorProduto * 0.10);
    console.log(valorTotal);
}*/

/*
    resolução professor

    1 = Débito desconto de 10%
    2 = Dinheiro ou Pix desconto de 15%
    3 = Valor normal, parcelado em até duas vezes
    4 = Acima de parcelado em 2x juros de 10%
*/

const valorProduto = 100;
const formaPagamento = 5;

if (formaPagamento === 1) {
    console.log(valorProduto - (valorProduto * 0.10));
} else if (formaPagamento === 2) {
    console.log(valorProduto - (valorProduto * 0.15));
} else if (formaPagamento === 3) {
    console.log(valorProduto);
} else {
    console.log(valorProduto + (valorProduto * 0.10));
}

