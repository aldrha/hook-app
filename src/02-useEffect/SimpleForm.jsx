import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        username: 'LadyAnko',
        email: 'aldrha@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setformState({
            ...formState,
            [name]: value, // propiedad computada JS => significa que, cuando escribes en un input, el nombre del campo (name) se usa para decidir qué propiedad del objeto formState se va a actualizar. Por ejemplo, si escribes en el input de "username", name será "username" y se actualizará esa propiedad en el estado. Si escribes en el de "email", se actualizará "email".
        });
    };

    //Se recomienda por los mismos desarrolladores de React, crea efectos paras cada caso especifico y no en uno agregar todo. es decir puede repetirse la funcion cuantas veces sea necesario disparar efectos

    // Despues del callback () => {}, va la dependencia
    useEffect(() => {
        // console.log('use Effect called');
    }, []); // las [] indican que solo se disparara el efecto una vez, cuando se renderiza el componente

    useEffect(() => {
        // console.log('formState called');
    }, [formState]); // Se dispararia cuando cambie el estado del formulario

    useEffect(() => {
        // console.log('email change');
    }, [email]); // se dispararia solo cuando el campo email cambie

    return (
        <>
            <div className="container">
                <h1>Formulario Simple</h1>
                <hr />

                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />

                <input
                    type="email"
                    className="form-control mt-3"
                    placeholder="aldrha@gmail.com"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />

                {username === 'LadyAnko95' && <Message />}
            </div>
        </>
    );
};
