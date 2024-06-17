import appLogo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";

import ContainedButton from "../General/ContainedButton";
import { theme } from "../../Theme/theme";
import TextButton from "../General/TextButton";
import AppMenu from "./AppMenu";
import useWindowSize from "../../hooks/useWindowSize";
export const AppBar = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
    <div className="app-bar">
      <img
        style={{ padding: "12px", gap: "12px" }}
        src={appLogo}
        alt="App logo"
      />
      <div>
       {isMobile ? <img
        style={{ padding: "12px", gap: "12px" }}
        src={burger}
        alt="App logo"
      /> :  <AppMenu>
          <TextButton
            color={theme.black.secondary}
            onClick={() => {}}
            text="Features"
          />
          <TextButton
            color={theme.black.secondary}
            onClick={() => {}}
            text="About"
          />
          <TextButton
            color={theme.black.secondary}
            onClick={() => {}}
            text="Contact"
          />
          <ContainedButton
            backgroundColor={theme.primary.main}
            color="white"
            hoverColor={theme.primary.dark}
            onClick={() => window.open('https://play.google.com/', '_blank')}
            text="Get the app"
          />
        </AppMenu>}
      </div>
    </div>
  );
};
