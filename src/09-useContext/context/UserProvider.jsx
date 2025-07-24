import { useState } from 'react';
import { UserContext } from './UserContext';

const user = {
    id: 123,
    name: 'Aldrha',
    email: 'aldrha@google.com',
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    // <UserContext.Provider value={{ hola: 'mundo', user: user }}></UserContext.Provider>
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
