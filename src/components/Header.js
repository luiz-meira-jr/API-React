import './css/header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className='header'>
            <Link to='/' className='logo'><h1>Header</h1></Link>
            <Link to='/sobre' className='link'>Sobre</Link>
            <Link to='/contato' className='link'>Contato</Link>
        </header>
    )
}

export default Header;