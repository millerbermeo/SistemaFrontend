import React from "react";
import { X, Menu } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";
import NavItem from "../atoms/NavItem";

const Sidebar = () => {
    const { expandir, toggleSidebar } = useSidebar();

    return (
        <div 
            className={`flex flex-col h-screen border-r border-gray-200 bg-[#F4F6F9] text-[#333333] ${expandir ? 'w-64' : 'w-20'} transition-width duration-300`}
        >
            <button
                onClick={toggleSidebar}
                className="py-4 h-16 px-7 flex w-full justify-start items-center hover:bg-[#E0E4E8]"
            >
                <span>
                    {expandir ? (
                        <Menu color="#007BFF" />
                    ) : (
                        <X color="#007BFF" />
                    )}
                </span>
            </button>

            <div className="border-t border-[#D0D4D8] h-screen overflow-y-auto">
                <div className="mt-4">
                    <NavItem icon="Home" label="Home" path="/" />
                    <NavItem icon="Users" label="Dashboard" path="/dashboard" />
                    <NavItem icon="Home" label="Home" path="/ass" />
                    <NavItem icon="Users" label="Users" path="/users" />
                    <NavItem icon="Home" label="Home" path="/cas" />
                    <NavItem icon="Users" label="Dashboard" path="/dashboard" />
                    <NavItem icon="Home" label="Home" path="/csac" />
                    <NavItem icon="Users" label="Dashboard" path="/dashboard" />
                    <NavItem icon="Home" label="Home" path="/casccsa" />
                    <NavItem icon="Users" label="Dashboard" path="/dashboard" />
                    <NavItem icon="Home" label="Home" path="/vas" />
                    <NavItem icon="Users" label="Dashboard" path="/dashboard" />
                    <NavItem icon="Users" label="Dashboard" path="/dashboard" />
                    <NavItem icon="Home" label="Home" path="/casccsa" />
                    <NavItem icon="Users" label="Dashboard" path="/dashboard" />

                </div>
            </div>
        </div>
    );
}

export default Sidebar;
