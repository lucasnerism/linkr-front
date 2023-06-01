import { createContext, useState } from "react";

export const LogOutContext = createContext()

export default function LogOutProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <LogOutContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </LogOutContext.Provider>
    )
}