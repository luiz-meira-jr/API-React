import '../pages/css/contato.css'
import '../components/css/global.css'

function Contato(){

    return(

        <div className="contato">

            <h1>Contato</h1>

            <p>
                Esta página foi desenvolvida como parte
                dos meus estudos em React e Front-End.
            </p>

            <p>
                Caso queira acompanhar minha evolução
                como desenvolvedor, entre em contato
                através das redes abaixo.
            </p>


            <div className="contato-links">

                <a
                    href="https://github.com/luiz-meira-jr"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/luiz-carlos-meira-j%C3%BAnior-bb0901219/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="mailto:meiraj25@email.com"
                >
                    Email
                </a>

            </div>


            <div className="contato-info">

                <h2>Tecnologias estudadas</h2>

                <ul>

                    <li>React</li>

                    <li>JavaScript</li>

                    <li>PHP</li>

                    <li>MySQL</li>

                    <li>CSS3</li>

                </ul>

            </div>

        </div>

    )

}

export default Contato;