import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AdminAuthContext } from "./auth.context";
import { httpGetAllShipments, httpGetCurrentShipmentInfo } from "../../utils/nodejs/admin";

const SHIPPER_INFO = {
  ShipperName: "",
  ShipperAddress: "",
  ShipperPhonenumber: "",
  ShipperEmail: "",
}

const RECEIVER_INFO = {
  ReceiverName: "",
  ReceiverAddress: "",
  ReceiverPhonenumber: "",
  ReceiverEmail: "",
}

const SHIPMENT_INFO = {
  Origin: "",
  Package: "",
  Status: "",
  Destination: "",
  Carrier: "",
  TypeOfShipment: "",
  Weight: "",
  ShipmentMode : "",
  CarrierReferenceNo : "",
  Product : "",
  Quantity : "",
  PaymentMode: "",
  TotalFreight : "",
  ExpectedDeliveryDate : "",
  DepartureTime : "",
  PickUpDate : "",
  PickUpTime : "",
  Comment : "",
}

export const ShipmentContext = createContext({
  allShipments: null,
  setAllShipment: () => {},
  currentShipment: null,
  updateCurrentShipment:() => {},

  consignmentNo: null,
  setConsignmentNo: () => {},
  shipperInfo : null,
  setShipperInfo: () => {},
  receiverInfo : null,
  setReceiverInfo: () => {},
  shipementInfo : null,
  setShipementInfo: () => {},
});

export const ShipmentProvider = ({ children }) => {

  const [allShipments, setAllShipment] = useState([]);
  const [currentShipment, setCurrentShipment] = useState(null);
  
  const [consignmentNo, setConsignmentNo] = useState("")
  const [shipperInfo, setShipperInfo] = useState(SHIPPER_INFO)
  const [receiverInfo, setReceiverInfo] = useState(RECEIVER_INFO)
  const [shipmentInfo, setShipmentInfo] = useState(SHIPMENT_INFO)


  useEffect(() => {
    async function getShipmentsArray() {
      const response = await httpGetAllShipments();
      setAllShipment(response)
    }
    getShipmentsArray();
  }, [])

  //update consignment no shipper info, receiver info and shipment info when shipment is changed

  useEffect(() => {
    async function getShipmentInfoArray () {
      if (currentShipment) {
        
        let response = await httpGetCurrentShipmentInfo({ShipmentId: currentShipment});
        const {
          ConsignmentNo,
          ShipperName,
          ShipperAddress,
          ShipperPhonenumber,
          ShipperEmail,
          ReceiverName,
          ReceiverAddress,
          ReceiverPhonenumber,
          ReceiverEmail,
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
        } = response;
        console.log({response})
        setConsignmentNo(ConsignmentNo);
        setShipperInfo({
          ShipperName,
          ShipperAddress,
          ShipperPhonenumber,
          ShipperEmail,
        })
        setReceiverInfo({
          ReceiverName,
          ReceiverAddress,
          ReceiverPhonenumber,
          ReceiverEmail,
        })
        setShipmentInfo({
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
        })
        } 
      }
      getShipmentInfoArray();

  }, [currentShipment])


  const updateCurrentShipment = (ShipmentId) => {
    setCurrentShipment(ShipmentId)
  }

  const value = {
    allShipments,
    setAllShipment,
    currentShipment,
    updateCurrentShipment,

    consignmentNo,
    setConsignmentNo,
    shipperInfo,
    setShipperInfo,
    receiverInfo,
    setReceiverInfo,
    shipmentInfo,
    setShipmentInfo,
  };

  return (
    <ShipmentContext.Provider value={value}>
      {children}
    </ShipmentContext.Provider>
  );
};
