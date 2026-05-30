import './css/footer.css'
import './css/global.css'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-links'>
                <Link to='/'>Inicio</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
            </div>
            <p>Desenvolvido com React</p>
            <p>© 2026 Luiz Meira</p>
        </footer>
    )
}

export default Footer;