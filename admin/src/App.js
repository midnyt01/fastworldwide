import { Routes, Route } from "react-router-dom";

// Admin Panel
import AdminPanel from "./routes/admin/admin-panel.component";
import BugreportPage from "./routes/admin/admin-panel-management/bug-reports";
import EnquiryPage from "./routes/admin/admin-panel-management/enquiry";
import SiteSettingPage from "./routes/admin/admin-panel-management/site-settings";
// CSS
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// Images and Logo
import SFLogo from "./assets/SF-logo.png";
import { ProtectedRoute } from "./context/admin/protected-route";
import AddShipment from "./routes/admin/add-shipment/add-shipment";
import Adminlogin from "./routes/admin/admin-login";
import AdminCreateAccount from "./routes/admin/create-admin-account";
// import SellerCreateOrder from "./routes/seller/seller-create-order/seller-create-order.component";

library.add(fas);

function App() {
  return (
    <Routes>
      {/* Common */}
      <Route path="/mainlogo" element={<SFLogo />} />
      <Route path="/admin-login" element={<Adminlogin />} />
      {/* Admin Panel */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-shipment"
        element={
          <ProtectedRoute>
            <AddShipment />
          </ProtectedRoute>
        }
      />
            <Route
        path="/create-account"
        element={
          <ProtectedRoute>
            <AdminCreateAccount />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/add-banner"
        element={
          <ProtectedRoute>
            <BannerPage />
          </ProtectedRoute>
        }
      /> */}

      {/* <Route
        path="/admin-inventory"
        element={
          <ProtectedRoute>
            <AdminInventory />
          </ProtectedRoute>
        }
      /> */}
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <BugreportPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/enquiries"
        element={
          <ProtectedRoute>
            <EnquiryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/site-settings"
        element={
          <ProtectedRoute>
            <SiteSettingPage />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
