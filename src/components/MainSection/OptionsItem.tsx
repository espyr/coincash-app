import React from "react";
import { theme } from "../../Theme/theme";
import useWindowSize from "../../hooks/useWindowSize";

interface OptionsItemProps {
  icon: string;
  text: string;
  highlight: string;
}

const OptionsItem: React.FC<OptionsItemProps> = ({ icon, text, highlight }) => {
  const parts = text.split(" ");
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
    <div className="options-item" style={{ textAlign: "center", width: isMobile ? '400px' : 'auto',}}>
      <img src={icon} alt={text} width="80" height="80" />
      <p className="typography-h5" style={{ textAlign: "center", width: isMobile ? '96px' : 'auto',}}>
        {parts.map((part, index) => (
          <span 
            key={index}
            style={{              
              color: part === highlight ? theme.primary.main : "inherit",
            }}
          >
            {part}
            {/* space between text parts */}
            {index < parts.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
    </div>
  );
};

export default OptionsItem;
