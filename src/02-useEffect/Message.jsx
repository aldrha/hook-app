import { useState } from 'react';
import { useEffect } from 'react';

export const Message = () => {
    const [cords, setCords] = useState({ x: 0, y: 0 });
    //NO TENEMOS QUE MANDAR A HACER CAMBIOS EN EL STATE EN UN COMPONENTE QUE NO ESTA MONTADO

    useEffect(() => {
        // console.log('Message Mounted'); // Componente Montado

        const onMouseMove = ({ x, y }) => {
            // const cords = { x, y };
            setCords({ x, y });
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            //.log('Message Unmounted'); // Componente Desmontado
            // Es recomendable siempre desmontar el componente porque sino queda activo y sigue ejecutandose especialmente cuando utiliza listeners, observables o peticiones http, tambien cuando se usa el useState o se hace un cambio de estado
            window.removeEventListener('mousemove', onMouseMove);
            // Cleanup Parte de la limpieza del useEffect
        };
    }, []);

    return (
        <>
            <h1>El usuario ya existe</h1>
            <p>{JSON.stringify(cords)}</p>
        </>
    );
};
