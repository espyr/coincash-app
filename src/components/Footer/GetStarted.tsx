import { theme } from "../../Theme/theme";
const GetStarted = () => {
  return (
    <div className="get-started">
      <p className="typography-h2" style={{ color: "white" }}>
        Get started <span style={{ color: theme.primary.main }}>today</span>
      </p>
      <p className="typography-h5" style={{ color: "white" }}>
        Sing up to receive email updates on new products announcements, special
        promotions sales an more.
      </p>
    </div>
  );
};

export default GetStarted;
