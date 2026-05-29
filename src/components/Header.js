import './css/header.css'
import './css/global.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className='header'>
            <Link to='/' className='logo'><h1>Loja</h1></Link>
            <div className=''>
                <Link to='/sobre' className='link'>Sobre</Link>
                <Link to='/contato' className='link'>Contato</Link>
            </div>
        </header>
    )
}

export default Header;