import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='w-full bg-red-700 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Farmácia Menos é Mais

                    <div className='flex gap-4'>      
                        <Link to="/categorias" className="hover:underline">Categorias</Link> 
                        <Link to='/cadastroCategoria ' className='hover:underline'>Cadastrar Categoria</Link>          
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar