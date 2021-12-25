import { useState } from 'react';

// hook => gancho

export function Counter(){

    const [counter, setCounter] = useState(0);

    function incrementar(){
        setCounter(counter + 1);

        console.log(counter);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={incrementar}>adicionar</button>
                {/* <br />
            <button type="button" onClick={zerar}>Zerar</button> */}
        </div>
    );
}