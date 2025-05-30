import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        username: '',
        password: '',
        apellido: '',
        tipo: '',
        activo: '',
        cedula: '',
        rol: ''
    });

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    );
};