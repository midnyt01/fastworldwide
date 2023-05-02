//create admin account

const { db } = require("../services/mysql");

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
  createShipment
};
