import {useState } from 'react';

function Home(){
    return (

        <div class ="container">
            <reader>

                <h1>Homei2</h1>

                <img
                    src="https://github.com/luizhcoelho/GitIndividuosocial/blob/main/Icons/Blogger.svg"
                    alt="My Image"
                    width={300}
                    height={300}
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