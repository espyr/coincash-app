import "./App.css";
import { ThemeProvider } from "./Theme/ThemeContext";
import { AppBar } from "./components/Dashboard/AppBar";
import HeroLayout from "./components/HeroLayout";
import MainText from "./components/StartSection/MainText";
import IPhoneSlot from "./components/StartSection/IPhoneSlot";
import BlueSection from "./components/StartSection/BlueSection";
import BuySection from "./components/MainSection/BuySection";
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles";

function App() {
  return (
    <ThemeProvider>
        <HeroLayout>
          <AppBar />
          <div className="flex-container">
            <MainText />
            <IPhoneSlot />
          </div>
        </HeroLayout>
        <BlueSection />
        <BuySection />
        <Articles/>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
