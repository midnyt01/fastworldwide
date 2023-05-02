import { createContext, useState } from "react";

export const EditorContext = createContext({
  consignmentNo: null,
  setConsignmentNo: () => {},
  shipperInfo : null,
  setShipperInfo: () => {},
  receiverInfo : null,
  setReceiverInfo: () => {},
  shipementInfo : null,
  setShipementInfo: () => {},



  caseStudyContent: null,
  setCaseStudyContent: () => {},
  caseStudyTitle: null,
  setCaseStudyTitle: () => {},
  selectedCaseStudyFile: null,
  setSelectedCaseStudyFile: () => {},
  caseStudyImageUrl: null,
  setCaseStudyImageUrl: () => {},
  caseStudyCategories: null,    
  setCaseStudyCategories: () => {},
  caseStudyMetaTitle: null,
  setCaseStudyMetaTitle: () => {},
  caseStudyMetaDescription: null,
  setCaseStudyMetaDescription: () => {},
});

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

export const EditorPorvider = ({ children }) => {

  const [consignmentNo, setConsignmentNo] = useState("")
  const [shipperInfo, setShipperInfo] = useState(SHIPPER_INFO)
  const [receiverInfo, setReceiverInfo] = useState(RECEIVER_INFO)
  const [shipmentInfo, setShipmentInfo] = useState(SHIPMENT_INFO)

  const [caseStudyTitle, setCaseStudyTitle] = useState("");
  const [caseStudyContent, setCaseStudyContent] = useState("");
  const [selectedCaseStudyFile, setSelectedCaseStudyFile] = useState(null);
  const [caseStudyImageUrl, setCaseStudyImageUrl] = useState(null);
  const [caseStudyCategories, setCaseStudyCategories] = useState([]);
  const [caseStudyMetaTitle, setCaseStudyMetaTitle] = useState("");
  const [caseStudyMetaDescription, setCaseStudyMetaDescription] = useState("");


  const value = {
    consignmentNo,
    setConsignmentNo,
    shipperInfo,
    setShipperInfo,
    receiverInfo,
    setReceiverInfo,
    shipmentInfo,
    setShipmentInfo,

    caseStudyTitle,
    setCaseStudyTitle,
    caseStudyContent,
    setCaseStudyContent,
    selectedCaseStudyFile,
    setSelectedCaseStudyFile,
    caseStudyImageUrl,
    setCaseStudyImageUrl,
    caseStudyCategories,    
    setCaseStudyCategories,
    caseStudyMetaTitle,
    setCaseStudyMetaTitle,
    caseStudyMetaDescription,
    setCaseStudyMetaDescription,

  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};
