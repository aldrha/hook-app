import React from 'react';
// import { memo } from 'react';

export const Small = React.memo(({ value }) => {
    console.log('Me volvi a dibujar :(');

    return <small>{value}</small>;
});

// El memo es una funcion que le dice a react memoriza este componente, solo cuando los props cambian es cuando se vuelve a renderizar el componente
