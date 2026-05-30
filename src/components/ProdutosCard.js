import '../pages/css/produtos.css';
import { Link } from 'react-router-dom';

function ProdutosCard(props){

    return(
        <Link className='pgprod' to={`/produtos/${props.produto.id}`}>
            <div className="card">
                <img src={props.produto.image} alt={props.produto.title}/>
                <h4>{props.produto.title}</h4>
                <p className='preco'>R$ {props.produto.price.toFixed(2)}</p>
                <p className='categoria'><strong>Categoria: </strong>{props.produto.category}</p>
            </div>
        </Link>
    )
}

export default ProdutosCard;