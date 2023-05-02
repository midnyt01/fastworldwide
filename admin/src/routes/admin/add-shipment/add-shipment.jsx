
import styled from "styled-components";
import Topbar from "../../../component/admin-panel-components/admin-topbar/topbar.component";
import "react-quill/dist/quill.snow.css";

import "./add-shipment.styles.css";
import AddShipmentBody from "../../../component/admin-panel-components/add-shipment";


const Container = styled.div`
  width: 100%;
`;

const AddShipment = () => {

  return (
    <Container>
      <Topbar />
      <AddShipmentBody />
    </Container>
  );
};

export default AddShipment;
