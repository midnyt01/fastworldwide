const { db } = require("../services/mysql");



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

module.exports = {
  getShipmentInfo
};



