const { SortSellerOrders } = require("../../helper-function/helper-functions");
const {
  createAdminAccount,
  loginInAdmin,
  createShipment,
  getAllShipment,
  deleteShipment,
  getCurrentShipmentInfo,
  updateShipment,
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

async function httpGetAllShipment(req, res) {
  console.log(req.body)
  await getAllShipment(function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  });
}
async function httpDeleteShipment(req, res) {
  let ShipmentId = req.body.ShipmentId
  await deleteShipment(ShipmentId, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  });
}

async function httpGetCurrentShipmentInfo(req, res) {
  let ShipmentId = req.body.ShipmentId
  await getCurrentShipmentInfo(ShipmentId, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  });
}

async function httpUpdateCurrentShipment (req, res) {
  let details = req.body;
  await updateShipment(details, function(err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data)
    }
  })
}


module.exports = {
  httpCreateAdminAccount,
  httpLoginAdmin,
  httpCreateShipment,
  httpGetAllShipment,
  httpDeleteShipment,
  httpGetCurrentShipmentInfo,
  httpUpdateCurrentShipment,
};
