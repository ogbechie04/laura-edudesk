import NavBar from "./components/NavBar";
import FeaturesSection from "./sections/FeaturesSection";
import IncomeReportSection from "./sections/IncomeReportSection";
import SalaryPaymentsSection from "./sections/SalaryPaymentsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import PlansSection from "./sections/PlansSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <>
      <NavBar />
      <IncomeReportSection />
      <FeaturesSection />
      <SalaryPaymentsSection />
      <PlansSection />
      <HowItWorksSection />
      <FaqSection />
      <HeroSection />
    </>
  );
}

export default App;
