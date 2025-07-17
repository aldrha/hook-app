import { useCounter, useFetch } from '../hooks';
import { LoadingMessage, PokemonCard } from '../03-examples';

export const Layout = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>MultiplesCustomHooks</h1>
            <hr />

            {isLoading ? (
                <LoadingMessage />
            ) : (
                <PokemonCard
                    id={data.id}
                    name={data.name}
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
                />
            )}

            {/* <h1>{data?.name}</h1> */}

            <button onClick={() => decrement()} className="btn btn-primary mt-2">
                Anterior
            </button>
            <button onClick={() => increment()} className="btn btn-primary mt-2">
                Siguiente
            </button>
        </>
    );
};
