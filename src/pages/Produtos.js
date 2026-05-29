import { useEffect, useState,  } from 'react';
import ProdutosCard from '../components/ProdutosCard'
import '../pages/css/produtos.css'
import '../components/css/global.css'

function Produtos(){

    const [produtos, setProdutos] = useState([]);
    const [busca, setBusca] = useState('');
    const [ordenar, setOrdenar] = useState('');

    useEffect(()=>{
        async function Api(){
            const response = await fetch('https://fakestoreapi.com/products');
            const dados = await response.json();

            setProdutos(dados);

        }
        
        Api();
    }, []);

    // FILTRO

    const produtosFiltrados = produtos.filter(
        (prod) => prod.title.toLowerCase().split(" ").some((palavra) => palavra.startsWith(busca.toLowerCase()))
    );

    // ORDENAR

    const produtosOrdenados = [...produtosFiltrados];

    if(ordenar === 'menor'){
        produtosOrdenados.sort((a, b) => a.price - b.price);
    } else if (ordenar === 'maior'){
        produtosOrdenados.sort((a, b) => b.price - a.price);
    }

    return(
        <div className='container'>
            <h1>Loja Online</h1>
            <div className='topo'>
                <input
                    type='text' 
                    placeholder='Buscar produto...' 
                    value={busca} 
                    onChange={(e)=>setBusca(e.target.value)}
                />
                <select className='ordenar' value={ordenar} onChange={(e)=> setOrdenar(e.target.value)}>
                    <option value= ''>
                        Ordenar
                    </option>
                    <option value= 'menor'>
                        Mais barato
                    </option>
                    <option value= 'maior'>
                        Mais caro
                    </option>
                </select>
            </div>
            <div className='produtos'>
                {produtosOrdenados.map((prod=>(
                    <ProdutosCard key={prod.id} produto={prod}/>
                )))}
            </div>
        </div>
    )

}

export default Produtos;