import { css } from "@emotion/react";

export const containedButtonStyles = (
  backgroundColor: string,
  color: string,
  hoverColor: string,
  disabledColor: string
) => css`
  background-color: ${backgroundColor};
  color: ${color};
  padding: 12px 24px 12px 24px;
  border: none;
  gap: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
  &:hover {
    background-color: ${hoverColor};
  }

  &:disabled {
    background-color: ${disabledColor};
    cursor: not-allowed;
  }
`;

export const textButtonStyles = (
  color: string,
  hoverColor: string,
  disabledColor: string
) => css`
    background-color: transparent;
    color: ${color};
    padding: 0px;
  font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    line-height:30px;
  
    &:hover {
    color: ${hoverColor};
    text-decoration: underline; 
  }
  
    &:disabled {
      color: ${disabledColor};
      cursor: not-allowed;
    }
  `;
