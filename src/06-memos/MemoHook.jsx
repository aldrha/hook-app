import { useState } from 'react';
import { useCounter } from '../hooks';
import { useMemo } from 'react';

const heavyStuff = (initialIteraction = 100) => {
    for (let i = 0; i < initialIteraction; i++) {
        console.log(`ahi vamos`);
    }

    return `${initialIteraction} iteracciones realizadas`;
};

export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);

    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]); // el useMemo memoriza un Valor (lo que sea que retorne)(el valor memorizado
    // se va a mantener asi a menos que las dependencias del useMemo cambien)
    // el primer argumento que recibe el useMemo debe de regresar una funcion que retorne algo sino retornara undefined y eso no es correcto
    // es recomendable usarlo cuando se tienen tareas muy pesadas, para ahorrarse el rendenrizado
    return (
        <>
            <h1>
                Counter <small>{counter}</small>
            </h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button onClick={() => increment()} className="btn btn-primary mt-2">
                + 1
            </button>

            <button onClick={() => setShow(!show)} className="btn btn-outline-primary mt-2">
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    );
};
