import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import WalletManagenmentCard from "./components/feature-cards/WalletManagementCard";
import MoneyAddIcon from "./components/MoneyAddIcon";

function App() {
  return (
    <>
      <NavBar />
      <WalletManagenmentCard />
      <MoneyAddIcon />
    </>
  );
}

export default App;
