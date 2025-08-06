import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('pruebas en useForm', () => {
    const initialform = {
        name: 'Aldrha',
        email: 'aldrha@google.com',
    };

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialform));

        expect(result.current).toEqual({
            name: initialform.name,
            email: initialform.email,
            formState: initialform,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialform));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('debe de realizar el reset del formualrio', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialform));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialform.name);
        expect(result.current.formState.name).toBe(initialform.name);
    });
});
