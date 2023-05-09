const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//create admin account

const { db } = require("../services/mysql");


const JWT_TOKEN = "breakthematrix";

async function createAdminAccount(adminDetails, callback) {
  //encrypt password
  const { Email, Password } = adminDetails;
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(Password, salt);
  let sql = `SELECT * FROM admins WHERE Email = '${Email}'`
  db.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      if (result.length > 0) {
        callback("admin with this email already exixts", null)
      } else {
        let sql = "INSERT INTO admins SET ?";
        db.query(
          sql,
          { ...adminDetails, Password: hashPass },
          async (err, result) => {
            if (err) {
              callback(err);
            } else {
              console.log(result)
              let data = {
                admin: {
                  AdminId: result.insertId,
                  PhoneNumber: adminDetails.PhoneNumber,
                  isAdmin: true,
                },
              };
              const authToken = jwt.sign(data, JWT_TOKEN);
              let success = true;
              callback(null, { authToken, success });
            }
          }
        );
      }
    }
  })
}

async function loginInAdmin(adminCreds, callback) {
  const { Email, Password } = adminCreds;
  let sql = `SELECT * FROM admins WHERE Email = '${Email}'`;
  db.query(sql, async (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      if (result.length < 1) {
        callback("admin not found", null);
      } else {
        let AdminId = result[0].AdminId;
        let comparePassword = await bcrypt.compare(
          Password,
          result[0].Password
        );
        if (!comparePassword) {
          callback("password does not match", null);
        } else {
          let data = {
            admin: {
              AdminId,
              Email,
              isAdmin: true,
            },
          };
          console.log(data)
          const authToken = jwt.sign(data, JWT_TOKEN);
          let success = true;
          callback(null, { authToken, success });
        }
      }
    }
  });
}

async function createShipment (shipmentDetails, callback) {
  let sql = 'INSERT INTO shipment SET ?';
  db.query(sql, shipmentDetails, function(err, result) {
    if (err) {
      return callback(err, null)
    } else {
      return callback(null, {
        success: true
      })
    }
  })
}

async function getAllShipment(callback) {
  let sql = `SELECT ConsignmentNo, ShipmentId FROM shipment WHERE IsDeleted = ${0}`;
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

async function deleteShipment(ShipmentId, callback) {
  let sql = `UPDATE shipment SET IsDeleted = ${1} WHERE ShipmentId = ${ShipmentId}`;
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, {
        success: true
      })
    }
  })
}

async function getCurrentShipmentInfo(ShipmentId, callback) {
  let sql = `SELECT * FROM shipment WHERE (ShipmentId = ${ShipmentId} AND IsDeleted = ${0})`;
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result[0])
    }
  })
}

async function updateShipment(details, callback) {
  const {ShipmentId} = details;
  let sql = `UPDATE shipment SET ? WHERE ShipmentId = ${ShipmentId}`;
  db.query(sql, details, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, {
        success: true
      })
    }
  })
}


module.exports = {
  createAdminAccount,
  loginInAdmin,
  createShipment,
  getAllShipment,
  deleteShipment,
  getCurrentShipmentInfo,
  updateShipment
};
