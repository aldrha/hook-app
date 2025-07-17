import { useRef } from 'react';

export const FocuesScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();

        inputRef.current.select();
    };
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input ref={inputRef} type="text" placeholder="Ejemplo" className="form-control mt-2" />
            <button onClick={onClick} className="btn btn-primary mt-2">
                Set Focus
            </button>
        </>
    );
};
