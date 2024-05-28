/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function AplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function AplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

const ValorProduto = 100
const OpçãoPagamento = 5

if (OpçãoPagamento === 1) {
    console.log('Á vista no Débito, valor: ', AplicarDesconto(ValorProduto, 10));
} else if (OpçãoPagamento === 2) {
    console.log('Á vista no Dinheiro ou pix, valor: ', AplicarDesconto(ValorProduto, 15));
} else if (OpçãoPagamento === 3) {
    console.log('Pagamento em duas vezes: ', ValorProduto);
} else if (OpçãoPagamento === 4) {
    console.log('Acima de duas vezes, valor: ', AplicarJuros(ValorProduto, 10));
} else {
    console.log('Opção inválida!');
}




