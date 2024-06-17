/** @jsxImportSource @emotion/react */
import React from "react";
type AppMenuProps = {
  children: React.ReactNode;
};

const AppMenu: React.FC<AppMenuProps> = ({ children }) => {
  return (
    <div className="app-menu">
      {children}
    </div>
  );
};

export default AppMenu;
