import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sobre from './pages/Sobre.js'
import Produtos from './pages/Produtos.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js';
import Contato from './pages/Contato.js';
import DetalheProd from './pages/produtos/DetalheProduto.js';

import Erro from './pages/Erro.js'


function RoutesApp(){
  return(
    <BrowserRouter>
    <div className='app'>
      <Header/>
      <main>
        <Routes>
          <Route path="/sobre" element={ <Sobre/> }/>
          <Route path='/contato' element={ <Contato/> }/>
          <Route path='/produtos/:id' element={ <DetalheProd/> }/>
          <Route path='/' element={ <Produtos/> }/>
          <Route path='*' element={ <Erro/> }/>
        </Routes>
      </main>
      <Footer/>
    </div>
    
    </BrowserRouter>
  )
}

export default RoutesApp;