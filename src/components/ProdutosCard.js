import '../components/css/produtos.css';

function ProdutosCard(props){

    return(
        <div className="card">
            <img src={props.produto.image}/>
            <h4>{props.produto.title}</h4>
            <p className='preco'>R$ {props.produto.price.toFixed(2)}</p>
            <p className='categoria'><strong>Categoria: </strong>{props.produto.category}</p>
        </div>
    )
}

export default ProdutosCard;