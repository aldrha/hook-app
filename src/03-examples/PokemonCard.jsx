import { useLayoutEffect, useState } from 'react';
import { useRef } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {
    const h2Ref = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        // se usa para determinar las dimensiones de un elemento despues de es renderizado
        //
        const { height, width } = h2Ref.current.getBoundingClientRect();

        setBoxSize({ width, height });
    }, [name]);

    return (
        <section style={{ height: '200px', display: 'flex', flexDirection: 'row' }} className="card">
            <h2 ref={h2Ref} className="text-capitalize">
                #{id} - {name}
            </h2>

            {/* Imagenes */}
            <div>
                {sprites.map((sprite) => (
                    <img key={sprite} src={sprite} alt={name} />
                ))}
            </div>

            <pre>{JSON.stringify(boxSize)}</pre>
        </section>
    );
};
