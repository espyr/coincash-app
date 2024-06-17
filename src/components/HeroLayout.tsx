import React from "react";

type HeroLayoutProps = {
  children: React.ReactNode;
};

const HeroLayout: React.FC<HeroLayoutProps> = ({ children }) => {
  return (
    <div
      className="hero-layout"
      style={{
        background:
          "linear-gradient( rgba(255, 255, 255, 0.2), rgba(0, 102, 255, 0.2))",
      }}
    >
      {children}
    </div>
  );
};

export default HeroLayout;
