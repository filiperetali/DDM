import top from '../../assets/favicon.png';
import produto1 from '../../img/goku.png';
import produto2 from '../../img/jaspion.png';
import produto3 from '../../img/kaisen.png';
import produto4 from '../../img/zoro.png';
const carrinho = {
    topo:{
        titulo:"Carrinho",
        imagem: top,
    },
    detalhes:{
        titulo:"Detalhes do Carrinho",
        tituloProduto: "Produto 001",
        descricao:"Breve descrição do Produto",
        preco:"R$ 99,00",
        imagem:produto2
    },
    itens:{
        titulo:"Itens do carrinho",
        lista:[
            {
                nome: "Produto 001",
                descricao:"Breve descrição do Produto",
                preco:"R$ 99,00",
                imagem:produto1
            },
            {
                nome: "Produto 002",
                descricao:"Breve descrição do Produto",
                preco:"R$ 99,00",
                imagem:produto2
            },
            {
                nome: "Produto 003",
                descricao:"Breve descrição do Produto",
                preco:"R$ 99,00",
                imagem:produto3
            },
            {
                nome: "Produto 004",
                descricao:"Breve descrição do Produto",
                preco:"R$ 99,00",
                imagem:produto4
            }
        ]
    }
}
export default carrinho;    