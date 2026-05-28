import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h1>404</h1>
            <h2>Página não encontrada</h2> <br/>
            <Link to='/'><button>Página inicial</button></Link>
            <Link to='/sobre'><button>Sobre</button></Link>
            <Link to='/produtos'><button>Produtos</button></Link>
        </div>
    )
}

export default Erro;