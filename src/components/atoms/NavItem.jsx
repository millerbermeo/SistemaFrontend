import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "./Icons/Icon";
import { useSidebar } from "../../context/SidebarContext";

const NavItem = ({ icon, label, path }) => {
    const navigate = useNavigate();
    const { expandir } = useSidebar();
    const location = useLocation();

    const isSelected = location.pathname === path;

    const handleClick = () => {
        navigate(path);
    };

    return (
        <div
            onClick={handleClick}
            className={`relative ${
                isSelected ? 'bg-slate-300 text-black' : 'bg-transparent'
            } flex items-center p-2 my-1 px-3 mx-4 rounded-md hover:bg-slate-300 hover:text-black cursor-pointer group`}
        >
            <div>
                <Icon icon={icon} />
            </div>
            {expandir && <span className="ml-4">{label}</span>}

            {!expandir && (
                <div className="absolute left-full z-10 rounded-md px-2 py-1 ml-6 bg-[#273468] text-white text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                    {label}
                </div>
            )}
        </div>
    );
};

export default NavItem;