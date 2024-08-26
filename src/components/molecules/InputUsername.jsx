import React from 'react';
import { Input } from "@nextui-org/react";

const InputUsername = ({ email, setEmail }) => {  // Recibe email y setEmail como props
    return (
        <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            value={email}  // Utiliza el estado pasado como prop
            onChange={(e) => setEmail(e.target.value)}  // Utiliza la función pasada como prop
            onClear={() => setEmail('')}
            className="w-full"
        />
    );
}

export default InputUsername;
