import React, { createContext, useState } from 'react';

// crear el context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
    //crear el state del Context
    const [hola, guardarHola] = useState('hola');

    return (
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;