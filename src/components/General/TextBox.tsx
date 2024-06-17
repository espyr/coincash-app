import React, { useState } from "react";
import ContainedButton from "./ContainedButton";
import { theme } from "../../Theme/theme";

type TextBoxProps = {
  type: string;
  hasButton: boolean;
  buttonText?: string;
  buttonColor?: string;
  placeholder?: string;
};

const TextBox: React.FC<TextBoxProps> = ({
  type,
  hasButton,
  buttonText,
  buttonColor,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (type === "email") {
      setIsValidEmail(validateEmail(value));
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div style={{ position: "relative", width: "400px" }}>
      <input
        className="custom-input"
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        style={{ borderColor: type === "email" && !isValidEmail ? 'red' : 'initial' }}
      />
      <div
        style={{
          position: "absolute",
          right: "8px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {hasButton && (
          <ContainedButton
            backgroundColor={inputValue && (type !== "email" || isValidEmail) ? theme.primary.main : buttonColor as string}
            color="white"
            hoverColor={theme.primary.dark}
            onClick={() => {}}
            text={buttonText as string}
            disabled={!inputValue || (type === "email" && !isValidEmail)}  // Disable the button if input is empty or invalid email
          />
        )}
      </div>
      {type === "email" && !isValidEmail && inputValue && (
        <div style={{ color: 'red', fontSize: '12px', marginTop: '4px', position:'absolute' }}>
          Please enter a valid email address.
        </div>
      )}
    </div>
  );
};

export default TextBox;
