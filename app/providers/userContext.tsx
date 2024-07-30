import { createContext } from 'react'

export const UserContext = createContext({
    user: {
        firstName: '',
        lastName: ''
    },
    setUser: () => {}
});