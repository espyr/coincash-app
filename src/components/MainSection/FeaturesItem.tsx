import React, { LegacyRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import useInView from "../../hooks/useInVIew";

interface OptionsItemProps {
  photo: string;
  text: string;
  secondaryText: string;
  reverse: boolean;
}

const FeaturesItem: React.FC<OptionsItemProps> = ({
  photo,
  text,
  secondaryText,
  reverse,
}) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const [ref, isIntersecting] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
        gap: isMobile ? "24px" : "100px",
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "none" : "translateY(100px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <img src={photo} alt={text} width={isMobile ? "300" : "540px"} height={isMobile ? "200px" : "360px"} />
      <div
        className="feature-item"
        style={{
          textAlign: reverse || isMobile ? "start" : "end",
        }}
      >
        <p className="typography-h3">{text}</p>
        <p className="typography-h5">{secondaryText}</p>
      </div>
    </div>
  );
};

export default FeaturesItem;
