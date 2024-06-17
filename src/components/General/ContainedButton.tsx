/** @jsxImportSource @emotion/react */
import React from "react";
import { containedButtonStyles } from "./buttonStyles";

type ContainedButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  backgroundColor: string;
  color: string;
  hoverColor?: string;
  disabledColor?: string;
};

const ContainedButton: React.FC<ContainedButtonProps> = ({
  text,
  onClick,
  backgroundColor,
  color,
  hoverColor = backgroundColor,
  disabledColor = "#b0bec5",
  disabled = false,
}) => {
  return (
    <button
      css={containedButtonStyles(
        backgroundColor,
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

export default ContainedButton;
