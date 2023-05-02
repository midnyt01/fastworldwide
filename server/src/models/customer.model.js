const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { db } = require("../services/mysql");

const JWT_TOKEN = "breakthematrix";

async function getShipmentInfo (consignmentNo, callback) {
  let sql = `SELECT * FROM consignment 
  JOIN shipment_info ON consignment.ShipmentId = shipment_info.ShipmentId 
  WHERE ConsignmentNo = ${consignmentNo} `
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result[0])
    }
  })
}

async function demandCylinders(Id, quantity, callback) {
  console.log(quantity)
  const {Small, Medium, Large} = quantity;
  db.getConnection(function(err, connection) {
    if (err) {
      callback(err, null);
    } else {
      connection.beginTransaction(function(err) {
        if (err) {
          callback(err, null)
        }
        let sql0 = `SELECT Small, Medium, Large FROM sellers WHERE SellerId = ${Id}`
        connection.query(sql0, function(err0, result0) {
        if (err0) {
          return connection.rollback(function() {
            callback(err0, null)
          })
        } else {
          let newSmall = Number(result0[0].Small) + Number(Small)
          let newMedium = Number(result0[0].Medium) + Number(Medium)
          let newLarge = Number(result0[0].Large) + Number(Large)
          let sql = `UPDATE sellers SET Small = ${newSmall}, Medium = ${newMedium}, Large = ${newLarge} WHERE SellerId = ${Id}`;
          connection.query(sql, function (err, result) {
            if (err) {
              return connection.rollback(function() {
                callback(err0, null);
              });
            } else {
              let sql = `INSERT INTO demand_orders SET ?`;
              connection.query(sql, {SellerId : Id, Small, Medium, Large}, function(err, result) {
                if (err) {
                  return connection.rollback(function() {
                    callback(err, null)
                  })
                } else {
                  connection.commit(function(err, result) {
                    if (err) {
                      return connection.rollback(function() {
                        callback(err, null)
                      })
                    } else {
                      callback(null, {
                        success: true
                      });
                    }
                  })
                }
              })
            }
          });
        }
      })
      })
    }
  })
}




module.exports = {
  getShipmentInfo
};



