Calculadora de Pagamento de Produtos
Este projeto em JavaScript calcula o valor a ser pago por um produto com base na condição de pagamento escolhida.

Funcionalidades
Condições de Pagamento:
À vista Débito: Recebe 10% de desconto.
À vista no Dinheiro ou PIX: Recebe 15% de desconto.
Em duas vezes: Preço normal de etiqueta sem juros.
Acima de duas vezes: Preço normal de etiqueta mais juros de 10%.
Como Usar
Configuração:

Defina o preço normal do produto na variável ValorProduto.
Escolha uma das opções de pagamento configurando a variável OpcaoPagamento com um dos códigos especificados.
Execução:

Execute o código para calcular o valor a ser pago com base na condição de pagamento escolhida.
Exemplo de Uso
Suponha que o preço normal do produto seja R$ 100 e você queira pagar à vista no Dinheiro:

```javascript
function calcularPagamento(preco, desconto) {
return preco - (preco * (desconto / 100));
}

const precoProduto = 100;
const desconto = 15;

console.log('Valor a ser pago:', calcularPagamento(precoProduto, desconto));
```
Este README fornece uma visão geral do projeto e orienta o usuário sobre como configurar e usar a calculadora de pagamento de produtos. Você pode personalizá-lo conforme necessário e adicionar mais detalhes ou exemplos conforme seu projeto evolui.