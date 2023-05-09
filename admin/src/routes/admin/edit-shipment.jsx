import React from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "../../component/admin-panel-components/admin-topbar/topbar.component";
import EditShipmentComponent from "../../component/admin-panel-components/edit-shipment-component";
import RandomFile from "../../component/admin-panel-components/random-file";

const EditShipment = () => {
  return (
    <Routes>
      <Route index element={<Topbar />} />
      <Route path="/:Id" element={<EditShipmentComponent />} />
    </Routes>
  );
};

export default EditShipment;
