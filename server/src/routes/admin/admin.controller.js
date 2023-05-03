const { SortSellerOrders } = require("../../helper-function/helper-functions");
const {
  createAdminAccount,
  loginInAdmin,
  createShipment,
} = require("../../models/admin.model");

async function httpCreateAdminAccount(req, res) {
  await createAdminAccount(req.body, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  });
}

async function httpLoginAdmin(req, res) {
  await loginInAdmin(req.body, function (err, data) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.json(data);
    }
  });
}


async function httpCreateShipment(req, res) {
  await createShipment(req.body, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  });
}


module.exports = {
  httpCreateAdminAccount,
  httpLoginAdmin,
  httpCreateShipment
};
