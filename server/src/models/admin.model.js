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
  const {ConsignmentNo} = shipmentDetails
  delete shipmentDetails.ConsignmentNo;
  let sql = 'INSERT INTO shipment_info SET ?';
  db.query(sql, shipmentDetails, function(err, result) {
    if (err) {
      return callback(err, null)
    } else {
      let ShipmentId = result.insertId;
      let sql = 'INSERT INTO consignment SET ?';
      db.query(sql, {ShipmentId, ConsignmentNo}, function(err, result) {
        if (err) {
          callback(err, null)
        } else {
          return callback(null, {
            success: true
          })
        }
      })
    }
  })
}


module.exports = {
  createAdminAccount,
  loginInAdmin,
  createShipment
};
