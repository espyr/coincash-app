import iphone from "../../assets/iphone.png";
import { theme } from "../../Theme/theme";

const IPhoneSlot = () => {
  return (
    <div className="iphone-slot">
      <div
        className="eclipse-1"
        style={{
          backgroundColor: theme.primary.main,
        }}
      ></div>
      <div
        className="eclipse-2"
        style={{
          backgroundColor: theme.primary.dark,
        }}
      ></div>
      <img className="iphone"
        src={iphone}
        alt="iphone"
      />
    </div>
  );
};

export default IPhoneSlot;
