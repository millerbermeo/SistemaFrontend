import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext()

export const useSidebar = () => useContext(SidebarContext)
const SidebarProvider = ({ children }) => {
    const [expandir, setExpandir] = useState(true)

    const toggleSidebar = () => {
        setExpandir(!expandir)
    }


    return (
        <SidebarContext.Provider value={{ expandir, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider