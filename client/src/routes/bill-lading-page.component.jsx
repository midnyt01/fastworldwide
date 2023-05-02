
import BillladingSection from "../components/bill-lading/bill-lading-component";
import Footer from "../components/footer/footer.component";
import HeroBanner from "../components/home-banner.component";
import Topbar from "../components/topbar/topbar.component";

const BillLadingPage = () => {
  return (
    <div>
      <Topbar/>
      <HeroBanner/>
      <BillladingSection />
      <Footer />
    </div>
  );
};

export default BillLadingPage;
