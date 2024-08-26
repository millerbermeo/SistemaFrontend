import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../atoms/Icons/EyeOpen";
import { EyeFilledIcon } from "../atoms/Icons/EyeClosed";

const InputPassword = ({ password, setPassword }) => {  // Recibe password y setPassword como props
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      value={password}  // Utiliza el estado pasado como prop
      onChange={(e) => setPassword(e.target.value)}  // Utiliza la función pasada como prop
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="w-full"
    />
  );
};

export default InputPassword;
