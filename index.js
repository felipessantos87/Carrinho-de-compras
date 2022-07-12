const produtos = [
    {
        id: 1,
        nome: 'Azeite português 500ml',
        preco: 23.99,
    },
    {
        id:2,
        nome: 'Manteiga extra c/sal 200g',
        preco: 9.98,
    },
    {
        id:3,
        nome: 'Bebida mista 200ml',
        preco: 1.99,
    },
    {
        id:4,
        nome: 'Chocolate  ao leite kinder joy 20g',
        preco: 5.90,
    },
    {
        id:5,
        nome: 'Cervaja puro malte 350ml',
        preco: 3.59,
    },
]


let main1 = document.createElement('main')
let cH1 = document.createElement('h1')
let div1= document.createElement('div')
div1.setAttribute('id', 'topo')

let listaDeProdutos = document.createElement('ul')


let botao =document.createElement('button')


const renderizar = (function() {
    cH1.innerText='Mercado do Felipe'
    document.body.appendChild(cH1)

    let item = document.createElement('periodo')
    item.innerText='Item'
    let valor = document.createElement('periodo')
    valor.innerText='Valor'

    div1.append(item, valor)
    main1.appendChild(div1)

    criarListaItens()
    CriardetalhesDoProduto()

    let botao= document.createElement('button')
    botao.innerText='Finalizar compra'
    main1.appendChild(botao)

    listaDeProdutos.classList.add('listaDeProdutos')

    document.body.appendChild(main1)
    
})();

function criarListaItens(){
    for(let i=0; i<produtos.length;i++){
        let cLi = document.createElement('li')
        let cNomeItem = document.createElement('periodo')
        let cPrecoItem = document.createElement('periodo')

        cNomeItem.setAttribute('id','nomeProduto')
        cNomeItem.innerText = produtos[i].nome
        cLi.appendChild(cNomeItem)

        cPrecoItem.innerText = `R$ ${produtos[i].preco}`
        cLi.appendChild(cPrecoItem)

        cLi.classList.add('itensDoProduto')
        listaDeProdutos.appendChild(cLi)
        main1.appendChild(listaDeProdutos)
    }
}

function soma(){
    let valor = 0
    for(let i=0; i<produtos.length;i++){
        valor+=produtos[i].preco
    }
    return valor
}


function CriardetalhesDoProduto(){
    
    let detalhesDoProduto = document.createElement('ul')
    let ProductSome = document.createElement('li')
    let total = document.createElement('periodo')
    let valor = document.createElement('periodo')
    
    valor.setAttribute('id', 'total')

    detalhesDoProduto.setAttribute('id','detalhesDoProduto')
    
    total.innerText='Total'
    valor.innerText = `R$${soma()}`.replace('.',',')
    
    ProductSome.append(total, valor)
    detalhesDoProduto.append(ProductSome)
    main1.append(detalhesDoProduto)
}

