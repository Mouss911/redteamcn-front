import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "./Register";

export function RegisterPage() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    // Navigate back to home or login page
    navigate("/");
  };

  return (
    <Register
      isOpen={isOpen}
      onClose={handleClose}
    />
  );
}
