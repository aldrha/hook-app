import { fireEvent, render, screen } from '@testing-library/react';
import { MultiplesCustomHooks } from '../../src/03-examples/MultiplesCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultiplesCustomHooks', () => {
    const mockFunction = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockFunction,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });

        render(<MultiplesCustomHooks />);

        expect(screen.getByText('MultiplesCustomHooks'));
        expect(screen.getByText('Cargando ...'));

        const nameButton = screen.getByRole('button', { name: 'Siguiente' });
        // console.log(nameButton.disabled);

        expect(nameButton.disabled).toBeFalsy();
        // screen.debug();
    });

    test('Debe de mostrar un pokemon', () => {
        useFetch.mockReturnValue({
            data: {
                id: 'ABC',
                name: 'picachu',
                sprites: {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
                    back_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png',
                    back_shiny:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
                },
            },
            isLoading: false,
            hasError: false,
            error: null,
        });

        render(<MultiplesCustomHooks />);
        expect(screen.getByText(/picachu/));
        const nameButton = screen.getByRole('button', { name: 'Siguiente' });

        expect(nameButton.disabled).toBeFalsy();
    });

    test('debe de llamar a la funcion incrementar', () => {
        useFetch.mockReturnValue({
            data: {
                id: 'ABC',
                name: 'picachu',
                sprites: {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
                    back_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png',
                    back_shiny:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
                },
            },
            isLoading: false,
            hasError: false,
            error: null,
        });

        render(<MultiplesCustomHooks />);
        const nameButton = screen.getByRole('button', { name: 'Siguiente' });

        fireEvent.click(nameButton);

        expect(mockFunction).toHaveBeenCalled();
    });
});
