const { db } = require("../services/mysql");



async function getShipmentInfo (consignmentNo, callback) {
  let sql = `SELECT * FROM shipment WHERE (ConsignmentNo = '${consignmentNo}' AND IsDeleted = ${0})`
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



