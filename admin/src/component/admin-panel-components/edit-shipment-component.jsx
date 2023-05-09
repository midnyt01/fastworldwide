import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { EditorContext } from "../../context/admin/editor.context";
import { httpCreateNewShipment, httpUpdateShipment } from "../../utils/nodejs/admin";
import { useNavigate, useParams } from "react-router-dom";
import { ShipmentContext } from "../../context/admin/shipments.context";
import Topbar from "./admin-topbar/topbar.component";
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

const Action = styled.div`
  box-sizing: border-box;
  padding: 7px 20px;
  background: #4ec000;
  font-size: 20px;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  cursor: pointer;
`;

const TwoGridcontainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
`;

const GridWraper = styled.div`
display: flex;
flex-direction: column;
`;

const WrapperHeading = styled.h4`
font-size: 22px;
margin: 25px 0 10px 0;`;

const InputBox = styled.input`
    padding: 5px 7px;
    font-size: 16px;
    margin: 10px 0;
    width: 90%;
`;

const ThreeGridcontainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 50px;
`;

const InputContainer = styled.div`
margin-top: 15px;
`;

const InputHeading = styled.div``;


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



const EditShipmentComponent = () => {

    const navigate = useNavigate();
    
    const { Id } = useParams();
    console.log('hello world')

    const {
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
        setShipmentInfo} = useContext(ShipmentContext)

    useEffect(() => {
        updateCurrentShipment(Id)
        console.log({Id})
    }, [Id])

    




        const handleOnConsignmentNoChange = (e) => {
            setConsignmentNo(e.target.value)
        }

        const handleOnShipperInfoChange = (e) => {
            const {name, value} = e.target;
            setShipperInfo({...shipperInfo, [name]: value})
        }

        const handleOnReceiverInfoChange = (e) => {
            const {name, value} = e.target;
            setReceiverInfo({...receiverInfo, [name]: value})
        }

        const handleOnShipmentInfoChange = (e) => {
            const {name, value} = e.target;
            setShipmentInfo({...shipmentInfo, [name]: value})
        }
        const handleUpdate = async () => {
            console.log({consignmentNo ,...shipperInfo, ...receiverInfo, ...shipmentInfo})
            const response = await httpUpdateShipment({ShipmentId: currentShipment, ConsignmentNo: consignmentNo, ...shipperInfo, ...receiverInfo, ...shipmentInfo} )
            if (response.success) {
                console.log('shipment added')
                let newShipments = allShipments
                for (let i = 0; i< newShipments.length; i++) {
                    if (newShipments[i].ShipmentId == currentShipment) {
                        newShipments[i].ConsignmentNo = consignmentNo
                        setAllShipment([...newShipments])
                        break;
                    }
                }
                navigate('/all-shipments')
            } else {
                console.log('error', response)
            }
        }

  return (
        <>
        <Topbar />
    <Wrapper>
      <Header>
        <PageTitle>Create New Shipment</PageTitle>
        <Action onClick={handleUpdate} >Update Shipment</Action>
      </Header>
      <TwoGridcontainer>
        {/* SHIPPER INFO */}
        <GridWraper>
            <WrapperHeading>Consignment Number</WrapperHeading>
            <InputBox
                name="consignment"
                value={consignmentNo}
                onChange={handleOnConsignmentNoChange}
                placeholder="Enter Consignment Number"
            />
        </GridWraper>
      </TwoGridcontainer>
      <TwoGridcontainer>
        {/* SHIPPER INFO */}
        <GridWraper>
            <WrapperHeading>Shipper Info</WrapperHeading>
            <InputBox
                name="ShipperName"
                value={shipperInfo.ShipperName}
                onChange={handleOnShipperInfoChange}
                placeholder="Shipper Name"
            />
            <InputBox
                name="ShipperAddress"
                value={shipperInfo.ShipperAddress}
                onChange={handleOnShipperInfoChange}
                placeholder="Shipper Address"
            />
            <InputBox
                name="ShipperPhonenumber"
                value={shipperInfo.ShipperPhonenumber}
                onChange={handleOnShipperInfoChange}
                placeholder="Shipper Phonenumber"
            />
            <InputBox
            name="ShipperEmail"
            value={shipperInfo.ShipperEmail}
            onChange={handleOnShipperInfoChange}
            placeholder="Shipper Email"
        />
        </GridWraper>
        <GridWraper>
            {/* RECEIVER INFO */}
            <WrapperHeading>Receiver Info</WrapperHeading>
            <InputBox
                name="ReceiverName"
                value={receiverInfo.ReceiverName}
                onChange={handleOnReceiverInfoChange}
                placeholder="Receiver Name"
            />
            <InputBox
                name="ReceiverAddress"
                value={receiverInfo.ReceiverAddress}
                onChange={handleOnReceiverInfoChange}
                placeholder="Receiver Address"
            />
            <InputBox
                name="ReceiverPhonenumber"
                value={receiverInfo.ReceiverPhonenumber}
                onChange={handleOnReceiverInfoChange}
                placeholder="Receiver Phonenumber"
            />
            <InputBox
            name="ReceiverEmail"
            value={receiverInfo.ReceiverEmail}
            onChange={handleOnReceiverInfoChange}
            placeholder="Receiver Email"
        />
        </GridWraper>
      </TwoGridcontainer>
      <WrapperHeading>Shipement Info</WrapperHeading>
      <ThreeGridcontainer>
        <InputContainer>
            <InputHeading>
                Origin:
            </InputHeading>
            <InputBox
                name="Origin"
                value={shipmentInfo.Origin}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                Package:
            </InputHeading>
            <InputBox
                name="Package"
                value={shipmentInfo.Package}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                Status:
            </InputHeading>
            <InputBox
                name="Status"
                value={shipmentInfo.Status}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        
        <InputContainer>
            <InputHeading>
                Destination:
            </InputHeading>
            <InputBox
                name="Destination"
                value={shipmentInfo.Destination}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                Carrier:
            </InputHeading>
            <InputBox
                name="Carrier"
                value={shipmentInfo.Carrier}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>


        <InputContainer>
            <InputHeading>
                TypeOfShipment:
            </InputHeading>
            <InputBox
                name="TypeOfShipment"
                value={shipmentInfo.TypeOfShipment}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                Weight:
            </InputHeading>
            <InputBox
                name="Weight"
                value={shipmentInfo.Weight}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                ShipmentMode:
            </InputHeading>
            <InputBox
                name="ShipmentMode"
                value={shipmentInfo.ShipmentMode}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                CarrierReferenceNo:
            </InputHeading>
            <InputBox
                name="CarrierReferenceNo"
                value={shipmentInfo.CarrierReferenceNo}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        
        <InputContainer>
            <InputHeading>
                Product:
            </InputHeading>
            <InputBox
                name="Product"
                value={shipmentInfo.Product}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                Quantity:
            </InputHeading>
            <InputBox
                name="Quantity"
                value={shipmentInfo.Quantity}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>


        <InputContainer>
            <InputHeading>
                PaymentMode:
            </InputHeading>
            <InputBox
                name="PaymentMode"
                value={shipmentInfo.PaymentMode}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                TotalFreight:
            </InputHeading>
            <InputBox
                name="TotalFreight"
                value={shipmentInfo.TotalFreight}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                ExpectedDeliveryDate:
            </InputHeading>
            <InputBox
                name="ExpectedDeliveryDate"
                value={shipmentInfo.ExpectedDeliveryDate}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                DepartureTime:
            </InputHeading>
            <InputBox
                name="DepartureTime"
                value={shipmentInfo.DepartureTime}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        
        <InputContainer>
            <InputHeading>
                PickUpDate:
            </InputHeading>
            <InputBox
                name="PickUpDate"
                value={shipmentInfo.PickUpDate}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

        <InputContainer>
            <InputHeading>
                PickUpTime:
            </InputHeading>
            <InputBox
                name="PickUpTime"
                value={shipmentInfo.PickUpTime}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>


        <InputContainer>
            <InputHeading>
                Comment:
            </InputHeading>
            <InputBox
                name="Comment"
                value={shipmentInfo.Comment}
                onChange={handleOnShipmentInfoChange}
            />
        </InputContainer>

      </ThreeGridcontainer>
    </Wrapper>
        </>
  );
};

export default EditShipmentComponent;
