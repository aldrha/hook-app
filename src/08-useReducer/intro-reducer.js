const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del alma',
        done: false,
    },
];

// No se debe mutar el state

// el reducer es una funcion pura que recibe un estado inicial y una accion, para producir un nuevo estado basado en la accion que recibio
const todoReducer = (state = initialState, action = {}) => {
    // en todo momento debe de saber cual es el estado anterior. La accion es la que se encarga
    // de regresar un nuevo estado ( ya sea que queramos agregar, modificar o eliminar).
    if (action.type === '[TODO] add to todo') {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add to todo',
    payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
