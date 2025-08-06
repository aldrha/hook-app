import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en UseCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toEqual(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toEqual(100);
    });

    test('debe de incrementar el valor', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(3);
        });

        expect(result.current.counter).toBe(104);
    });

    test('debe de decrementar el valor', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(4);
        });

        expect(result.current.counter).toBe(95);
    });

    test('debe de resetar el valor', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment, reset } = result.current;

        act(() => {
            increment(5);
            reset();
        });

        expect(result.current.counter).toBe(100);
    });
});
