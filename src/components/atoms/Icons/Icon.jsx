import React from "react";
import * as LucideIcons from 'lucide-react';

const Icon = ({ icon }) => {
    const LucideIcon = LucideIcons[icon];
    return LucideIcon ? <LucideIcon /> : null;
}

export default Icon;