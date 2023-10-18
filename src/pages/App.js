import "../styles/App.css";
import Header from "../components/Header";
import Details from "../components/Details";
import Funds from "../components/Funds";
import Rewards from "../components/Rewards";
import { useConnect, useAccount } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <div className="App">
      <Header connect={connect} isConnected={isConnected} address={address} />
      <Details />
      <div className="fundsRewardsBox">
        <Funds />
        <Rewards />
      </div>
    </div>
  );
}

export default App;
