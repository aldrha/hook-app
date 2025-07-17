import { useEffect } from 'react';
import { useForm } from '../hooks';

export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password, onResetForm } =
        useForm({
            username: '',
            email: '',
            password: ''
        });

    //const { username, email, password } = formState ==> tambien se puede hacer asi, lo ideal es que los componentes sean lo mas limpios y pequeños posibles

    return (
        <>
            <div className="container">
                <h1>Formulario con custom hook</h1>
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

                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />

                <button onClick={onResetForm} className="btn btn-primary mt-2">
                    Reset
                </button>
            </div>
        </>
    );
};
