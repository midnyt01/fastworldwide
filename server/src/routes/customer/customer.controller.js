const {
  addCustomerAddress,
  getAllCustomerAddressesById,
  deleteCustomerAddressById,
  getAllBlogs,
  getBlogById,
  getAllCaseStudies,
  getCaseStudyById,
  CreateBlogPostByCustomer,
  commentOnBlogPost,
  postContactMe,
  getAllCommentsOnBlog,
  postReplyOnBlogComment,
  getAllRepliesOnComment,
  createUserAccount,
  logInUser,
  getShipmentInfo,
} = require("../../models/customer.model");

async function httpGetShipmentInfo (req, res) {
  let consignmentNo = req.body.id;

  await getShipmentInfo(consignmentNo, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

module.exports = {
  httpGetShipmentInfo
};
