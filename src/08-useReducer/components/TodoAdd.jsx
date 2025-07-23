import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        //TODO: recordar siempre usar el useForm que es mi hook para manejar formularios
        //lo ideal es no repetir codigo
        description: '',
    });

    const onSubmitTodo = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime() * 3,
            done: false,
            description,
        };

        onNewTodo(newTodo);

        onResetForm();
    };
    return (
        <form onSubmit={onSubmitTodo}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    );
};
