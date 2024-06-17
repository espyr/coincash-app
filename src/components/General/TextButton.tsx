/** @jsxImportSource @emotion/react */
import React from "react";
import { textButtonStyles } from "./buttonStyles";

type TextButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  color: string;
  hoverColor?: string;
  disabledColor?: string;
};

const TextButton: React.FC<TextButtonProps> = ({
  text,
  onClick,
  color,
  hoverColor = color,
  disabledColor = "#b0bec5",
  disabled = false,
}) => {
  return (
    <button
      css={textButtonStyles(
        color,
        hoverColor,
        disabledColor
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default TextButton;
