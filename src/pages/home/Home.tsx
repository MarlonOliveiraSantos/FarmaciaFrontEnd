
function Home() {
    return (
        <>
            <div className="bg-red-400 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://sindicoop.com.br/images/clube_de_vantagens/NOSSA-SAUDE-LOGO.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459632_640.png"
                            alt="Imagem Página Home"
                            className='w-2/5'
                        />
                        <img
                            src="https://cdn.pixabay.com/photo/2017/09/30/01/42/medicine-2801025_640.png"
                            alt="Imagem Página Home"
                            className='w-2/5'
                        />
                        <img
                            src="https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459633_640.png"
                            alt="Imagem Página Home"
                            className='w-2/5'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home