import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
    const { counter, increment } = useCounter(20);

    const [show, setShow] = useState(true);
    return (
        <>
            <h1>
                Counter <Small value={counter} />
            </h1>
            <hr />

            <button onClick={() => increment()} className="btn btn-primary mt-2">
                + 1
            </button>

            <button onClick={() => setShow(!show)} className="btn btn-outline-primary mt-2">
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    );
};
