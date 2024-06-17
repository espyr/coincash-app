import footerLogo from "../../assets/whiteLogo.svg";
import TextButton from "../General/TextButton";
const PolicySlot = () => {
  return (
    <div className="policy">
      <img
        style={{ padding: "12px", gap: "12px" }}
        src={footerLogo}
        alt="App logo"
      />
      <div className="policy-buttons">
        <TextButton color="white" onClick={() => {}} text="Privacy Policy" />
        <TextButton
          color="white"
          onClick={() => {}}
          text="Terms and conditions"
        />
      </div>
    </div>
  );
};

export default PolicySlot;
