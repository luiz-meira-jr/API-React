import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/detalheProduto.css';

function DetalheProd(){

    const { id } = useParams();

    const [produto, setProduto] = useState(null);

    useEffect(()=>{

        async function carregarProduto(){
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const dados = await response.json();

            setProduto(dados);
        }

        carregarProduto();
        
    }, [id]);

    if(!produto){
        return <h2>Carregando...</h2>
    }

    return(
        <div className='detalhe-container'>
            <div className='detalhe-imagem'>
                <img
                src={produto.image}
                alt={produto.title}
                width='200'
            />
            </div>
            <div className='detalhe-info'>
                <h1>{produto.title}</h1>
                <h2>R$ {produto.price.toFixed(2)}</h2>
                <p>{produto.description}</p>
                <small><strong>Categoria: </strong>{produto.category}</small> 
            </div>
        </div>
    )
}

export default DetalheProd;