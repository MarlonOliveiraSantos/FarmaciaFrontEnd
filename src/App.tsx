import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategorias/FormularioCategorias';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              
              <Route path="/home" element={<Home />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCagetoria" element={<FormularioCategoria />} />
              <Route path="/editarCagetoria/:id" element={<FormularioCategoria />} />
           
            </Routes>
          </div>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;