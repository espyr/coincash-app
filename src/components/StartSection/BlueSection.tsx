import { theme } from "../../Theme/theme";
const BlueSection = () => {
  return (
    <div
      className="blue-section"
      style={{
        backgroundColor: theme.primary.main,
      }}
    >
      <p className="typography-h4 subtext">
        over 200,000+ users have chosen COINCASH for everyday payments
      </p>
    </div>
  );
};

export default BlueSection;
