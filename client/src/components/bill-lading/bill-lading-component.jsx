import { useState } from "react";
import HeaderImg from "../../assets/icon-big-two.png";
import "../intro/section.styled.css";
import { Link } from "react-router-dom";
import BillInfo from "./bill-info";

async function getShipmentInfo(details) {
  const response = await fetch(
    `http://localhost:8000/customer/get-shipment-info`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    }
  );
  const data = await response.json();
  return data;
}

const BillladingSection = () => {
  const [consignmentNo, setconsignmentNo] = useState("");
  const [infoVisible, setInfoVisible] = useState(false)
  const [shipmentInfo, setShipmentInfo] = useState({});

  const handleOnChangeConsignmentNo = (e) => {
    setconsignmentNo(e.target.value);
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    setInfoVisible(true)
    const response = await getShipmentInfo({ id: consignmentNo });
      console.log(response)
      setShipmentInfo(response);
  }

  return (
    <div className="container">
      <div className="default-section m-auto">
        <h2 className="header-with-img mb-5">
          TRACK US
          <img src={HeaderImg} alt="" />
        </h2>

        <div className="tracking-form">
          <p>Enter the Consignment No.</p>
          <hr />
          <form>
            <input
              type="number"
              placeholder="Enter tracking number"
              onChange={handleOnChangeConsignmentNo}
            ></input>
            <button className="btn dark-bg light-text ml-2" onClick={handleOnClick}>Track</button>
            <hr />
          </form>
        </div>
        <h2 className="mt-4">
          Navistar Logistics Provides Dedicated Service in Freight Forwarding
        </h2>
        <Link to="/" className="btn cta-btn-bg">
          Request Quote
        </Link>
        {infoVisible && <BillInfo shipmentInfo={shipmentInfo} />}
      </div>
    </div>
  );
};

export default BillladingSection;
