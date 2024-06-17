import ContainedButton from "../General/ContainedButton";
import { theme } from "../../Theme/theme";
const MainText = () => {
  return (
    <div className="main-text-container">
      <div>
        <div className="main-text">
          <div>
            <p className="typography-h2">
              You can buy anything with{" "}
              <span style={{ color: theme.primary.main }}>COINCASH</span>
            </p>
            <p className="typography-h5">
              The easiest way to use your cryptocurrencies for everyday
              purchases.
            </p>
          </div>
          <div>
            <ContainedButton
              backgroundColor={theme.primary.main}
              color="white"
              hoverColor={theme.primary.dark}
              onClick={() => window.open('https://play.google.com/', '_blank')}
              text="Get the app"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainText;
