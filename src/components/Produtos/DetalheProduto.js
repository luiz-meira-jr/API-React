import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

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
        <div>
            <img
                src={produto.image}
                alt={produto.title}
                width='200'
            />
            <h1>{produto.title}</h1>
            <h2>R$ {produto.price}</h2>
            <p>{produto.description}</p>
            <small>Categoria: {produto.category}</small>
        </div>
    )
}

export default DetalheProd;