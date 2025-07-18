import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import { useEffect } from 'react';

//NOTA LAS FUNCIONES COMO LOS OBJETOS SIEMPRE APUNTAN A UN ESPACION DE MEMORIA DIFERENTE POR LO TANTO ES QUE APLICA

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(() => {
        // usualmente es para cuando se tiene una funcion muy grande que quita rendimiento a la aplicacion entonces
        // se puede memorizar usando useCallback
        setCounter((value) => value + 1);
    }, []);

    useEffect(() => {
        // este es el otro uso, que solo se dispare cuando el padre cambie o la funcion
        incrementFather();
    }, [incrementFather]);

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // };

    return (
        <>
            <h1>
                use CallbackHook <small>{counter}</small>
            </h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    );
};
