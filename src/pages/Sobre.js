import '../components/css/global.css'
import './css/sobre.css'

function Sobre(){
    return(
        <div className="sobre">
            <h1>Sobre o Projeto</h1>
            <p>Este projeto foi desenvolvido com React com o objetivo de praticar conceitos modernos de Front-End.</p>
            <p>A aplicação consome dados de uma API externa e exibe produtos de forma dinâmica, utilizando componentes, rotas, hooks e renderização dinâmica.</p>
            <h2>Tecnologias utilizadas</h2>
            <ul>
                <li>React</li>
                <li>React Router DOM</li>
                <li>JavaScript</li>
                <li>CSS3</li>
                <li>FakeStore API</li>
            </ul>
            <h2>Funcionalidades</h2>
            <ul>
                <li>Listagem dinâmica de produtos</li>
                <li>Filtro de busca</li>
                <li>Ordenação por preço</li>
                <li>Página de detalhes do produto</li>
                <li>Rotas SPA</li>
                <li>Responsividade</li>
            </ul>
            <p className="sobre-final">Projeto desenvolvido para fins de estudo e construção de portfóli</p>
        </div>
    )
}

export default Sobre;