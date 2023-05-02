const { SortSellerOrders } = require("../../helper-function/helper-functions");
const {
  createAdminAccount,
  loginInAdmin,
  getAllCustomers,
  postBlog,
  getAllBlogs,
  postCaseStudy,
  getAllCaseStudies,
  getAllLeadsInfo,
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
  httpCreateShipment
};
