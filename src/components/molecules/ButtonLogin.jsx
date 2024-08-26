import React from "react";
import { Button } from "@nextui-org/react";
import { UserIcon } from "../atoms/Icons/UserIcon";

const ButtonLogin = ({ handleLogin }) => {
    return (
        <Button
        className="w-full"
        size="lg"
            color="success"
            endContent={<UserIcon />}
            onClick={handleLogin}
        >
            Iniciar Sesión
        </Button>
    );
};

export default ButtonLogin;
