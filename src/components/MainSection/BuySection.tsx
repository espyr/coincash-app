import FeaturesList from "./FeaturesList";
import Options from "./Options";

const BuySection = () => {
  return (
    <div className="buy-section">
      <div className="buy-title">
        <p className="typography-h2" style={{ textAlign: "center" }}>
          Buy anything you ever imagine
        </p>
        <p className="typography-h5">
          The easiest way to use your cryptocurrencies for everyday purchases.{" "}
        </p>
      </div>
      <Options />
      <FeaturesList />
    </div>
  );
};

export default BuySection;
