import {useState } from 'react';

function Home(){
    return (

        <div class ="container">
            <reader>

                <h1>Homei2</h1>

                <img src="../Icons/Tumb Tube New.jpg"
                alt="Imagem não encontrada"
                width={500}
                height={500}
            
            />
            </reader>
            
            <Contador />


        </div>

    
    )
    
}



function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
            
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
export default Home