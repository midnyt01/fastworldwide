const express = require("express");

const {
  httpCreateShipment,
} = require("./admin.controller");

const adminRouter = express.Router();

adminRouter.post("/createshipment", httpCreateShipment)

module.exports = adminRouter;
