import React, { useContext } from "react";
import styled from "styled-components";
import Topbar from "../../component/admin-panel-components/admin-topbar/topbar.component";
import { ShipmentContext } from "../../context/admin/shipments.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import ShipmentCard from "../../component/admin-panel-components/shipment-card";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 85px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 0px;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 25px;
  @media (min-width: 800px) {
    font-size: 34px;
  }
`;

const ShipmentContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  position: relative;
`;

const AllShipments = () => {
  const { allShipments } = useContext(ShipmentContext);

  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Header>
          <PageTitle>All Shipments</PageTitle>
        </Header>
        <ShipmentContainer>
          {allShipments.map((shipment) => {
            return (
              <ShipmentCard key={shipment.ShipmentId} shipment={shipment} />
            );
          })}
        </ShipmentContainer>
      </Wrapper>
    </Container>
  );
};

export default AllShipments;
