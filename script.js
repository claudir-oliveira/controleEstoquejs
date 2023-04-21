let lstProdutos = ["Computador", "Carregador", "Celular", "Controle"];
let lstPrecos = {"Computador": 1525.34, "Carregador": 57.00, "Celular":734.99, "Controle": 39.20};
let lstQtd = {"Computador": 125, "Carregador": 75, "Celular":18, "Controle": 24};
let cod;
let nome = prompt("Olá Colaborador, digite seu nome: ");

function consultaCatalogo(cod=1) {
    lstProdutos.forEach(produto => {
        alert(cod + " - " + produto);
        cod++;
    });
}

function consultaPreco() {
    let produto = (prompt("Digite o código do produto:") -1)
    alert("O valor de " + lstProdutos[produto] + " é de R$" + lstPrecos[lstProdutos[produto]])
}

function consultaEstoque() {
    let produto = (prompt("Digite o código do produto:") -1)
    alert("Temos "+ lstQtd[lstProdutos[produto]] + " " + lstProdutos[produto] + " em estoque!")
}

function efetuaVenda() {
    let produto = (prompt("Digite o código do produto:") -1)
    let nomeProduto = lstProdutos[produto]
    let precoProduto =  lstPrecos[lstProdutos[produto]]
    let estoqueProduto = lstQtd[lstProdutos[produto]]
    let qtdVenda = prompt("Qual a quantidade do produto?")
    totalVenda = qtdVenda * precoProduto
    if(qtdVenda > estoqueProduto){
        alert("A quantidade solicitada é maior que o disponível!")
        efetuaVenda()
    }
    else{
        opcao = prompt("O valor total da venda é de: R$" + totalVenda +"\nDeseja prosseguir? (S/N)")
        if(opcao.toUpperCase() == "S"){
            lstQtd[nomeProduto] = estoqueProduto - qtdVenda
            alert("Venda finalizada com Sucesso!")
        }
        else{
            alert("Venda não finalizada!")
            efetuaVenda()
        }
    }
}

function cadastraProduto() {
    novoProduto = prompt("Qual o nome do novo produto?")
    precoNovoProduto = prompt("Qual o valor de venda do novo produto?")
    qtdNovoProduto = prompt("Qual a quantidade do produto?")
    lstProdutos.push(novoProduto)
    lstPrecos[novoProduto] = precoNovoProduto
    lstQtd[novoProduto] = qtdNovoProduto
}

document.getElementById("nome").textContent = nome;