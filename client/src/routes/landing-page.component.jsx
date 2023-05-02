
import Footer from "../components/footer/footer.component";
import HeroBanner from "../components/home-banner.component";
import IntroSection from "../components/intro/intro.component";
import Missionection from "../components/mission/mission.component";
import ServicesSection from "../components/services/services.component";
import Topbar from "../components/topbar/topbar.component";

const LandingPage = () => {
  return (
    <div>
      <Topbar/>
      <HeroBanner/>
      <IntroSection/>
      <ServicesSection />
      <Missionection />
      <Footer />
    </div>
  );
};

export default LandingPage;
