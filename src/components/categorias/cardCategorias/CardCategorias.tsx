import { Link } from 'react-router-dom'

function CardCategorias() {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-red-400 text-white font-bold text-2xl'>Categoria</header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>Descrição categoria:</p>
            
            <div className="flex">
                <Link to='' 
                    className='w-full text-black bg-amber-200 hover:bg-red-400 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to='' className='text-black bg-stone-600 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias