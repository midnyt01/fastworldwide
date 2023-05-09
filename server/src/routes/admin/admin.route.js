const express = require("express");

const {
  httpCreateShipment, httpCreateAdminAccount, httpLoginAdmin, httpGetAllShipment, httpDeleteShipment, httpGetCurrentShipmentInfo, httpUpdateCurrentShipment,
} = require("./admin.controller");

const adminRouter = express.Router();


adminRouter.post("/createadmin", httpCreateAdminAccount);
adminRouter.post("/login", httpLoginAdmin);

adminRouter.get("/shipments", httpGetAllShipment)
adminRouter.post("/shipments", httpGetCurrentShipmentInfo)
adminRouter.delete("/shipments", httpDeleteShipment)

adminRouter.post("/edit-shipment", httpUpdateCurrentShipment)

adminRouter.post("/createshipment", httpCreateShipment)

module.exports = adminRouter;
