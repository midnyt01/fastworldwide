const express = require("express");

const {
  httpCreateShipment, httpCreateAdminAccount, httpLoginAdmin,
} = require("./admin.controller");

const adminRouter = express.Router();


adminRouter.post("/createadmin", httpCreateAdminAccount);
adminRouter.post("/login", httpLoginAdmin);

adminRouter.post("/createshipment", httpCreateShipment)

module.exports = adminRouter;
