import './css/footer.css'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className="footer">
            <h1>Footer</h1>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/produtos'>Produtos</Link>
        </footer>
    )
}

export default Footer;