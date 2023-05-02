import React, { useEffect, useState } from "react";



const BillInfo = ({ shipmentInfo }) => {
  const {
    ConsignmentNo,
    ShipperName,
    ShipperAddress,
    ShipperPhonenumber,
    ShipperEmail,
    ReceiverName,
    ReceiverAddress,
    ReceiverPhonenumber,
    Origin,
    Package,
    Status,
    Destination,
    Carrier,
    TypeOfShipment,
    Weight,
    ShipmentMode ,
    CarrierReferenceNo ,
    Product ,
    Quantity ,
    PaymentMode,
    TotalFreight ,
    ExpectedDeliveryDate ,
    DepartureTime ,
    PickUpDate ,
    PickUpTime ,
    Comment ,
  } = shipmentInfo;


  return (
    <div style={{width: '95%', margin: ' 50px auto'}}>
      <div className="bill-info-two-grid">  
        {/* Shippers information */}
        <div>
          <h2 className="bill-info-main-header">Shipper Information</h2>
          <div className="bill-info-text" >{ShipperName}</div>
          <div className="bill-info-text" >{ShipperAddress}</div>
          <div className="bill-info-text" >{ShipperPhonenumber}</div>
          <div className="bill-info-text" >{ShipperEmail}</div>
        </div>
        {/* Receivers information */}
        <div>
          <h2 className="bill-info-main-header">Shipper Information</h2>
          <div className="bill-info-text" >{ReceiverName}</div>
          <div className="bill-info-text" >{ReceiverAddress}</div>
          <div className="bill-info-text" >{ReceiverPhonenumber}</div>
          <div className="bill-info-text" >{ShipperEmail}</div>
        </div>
      </div>
      <h2 className="shipment-status">Shipment Status</h2>
          <h2 className="bill-info-main-header">Shipment Information</h2>
      <div className="bill-info-three-grid">
        <div>
            <div className="bill-info-heading">Origin</div>
            <p className="bill-info-text" >{Origin}</p>
        </div>

        <div>
            <div className="bill-info-heading">Package</div>
            <p className="bill-info-text" >{Package}</p>
        </div>

        <div>
            <div className="bill-info-heading">Status</div>
            <p className="bill-info-text" >{Status}</p>
        </div>
        <div>
            <div className="bill-info-heading">Destination</div>
            <p className="bill-info-text" >{Destination}</p>
        </div>

        <div>
            <div className="bill-info-heading">Carrier</div>
            <p className="bill-info-text" >{Carrier}</p>
        </div>

        <div>
            <div className="bill-info-heading">TypeOfShipment</div>
            <p className="bill-info-text" >{TypeOfShipment}</p>
        </div>
        <div>
            <div className="bill-info-heading">Weight</div>
            <p className="bill-info-text" >{Weight}</p>
        </div>

        <div>
            <div className="bill-info-heading">ShipmentMode</div>
            <p className="bill-info-text" >{ShipmentMode}</p>
        </div>

        <div>
            <div className="bill-info-heading">CarrierReferenceNo</div>
            <p className="bill-info-text" >{CarrierReferenceNo}</p>
        </div>
        <div>
            <div className="bill-info-heading">Product</div>
            <p className="bill-info-text" >{Product}</p>
        </div>
        <div>
            <div className="bill-info-heading">Quantity</div>
            <p className="bill-info-text" >{Quantity}</p>
        </div>

        <div>
            <div className="bill-info-heading">PaymentMode</div>
            <p className="bill-info-text" >{PaymentMode}</p>
        </div>

        <div>
            <div className="bill-info-heading">TotalFreight</div>
            <p className="bill-info-text" >{TotalFreight}</p>
        </div>
        <div>
            <div className="bill-info-heading">ExpectedDeliveryDate</div>
            <p className="bill-info-text" >{ExpectedDeliveryDate}</p>
        </div>

        <div>
            <div className="bill-info-heading">DepartureTime</div>
            <p className="bill-info-text" >{DepartureTime}</p>
        </div>
        <div>
            <div className="bill-info-heading">PickUpDate</div>
            <p className="bill-info-text" >{PickUpDate}</p>
        </div>

        <div>
            <div className="bill-info-heading">PickUpTime</div>
            <p className="bill-info-text" >{PickUpTime}</p>
        </div>

        <div>
            <div className="bill-info-heading">Comment</div>
            <p className="bill-info-text" >{Comment}</p>
        </div>
      </div>
    </div>
  );
};

export default BillInfo;
