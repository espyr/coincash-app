import { theme } from "../../Theme/theme";
import GetStarted from "./GetStarted";
import PolicySlot from "./PolicySlot";
import TextBox from "../General/TextBox";

const Footer = () => {
  return (
    <div
    className="footer"
      style={{
        background: "linear-gradient(rgba(2, 13, 31, 1), rgba(0, 102, 255, 1))",
      }}
    >
      <GetStarted />
      <TextBox
        hasButton={true}
        type="email"
        buttonColor={theme.gray.light}
        buttonText="Sing up"
        placeholder="Type your email here"
      />
      <PolicySlot />
    </div>
  );
};

export default Footer;
