const express = require("express");
const fetchCustomer = require("../../middleware/fetchcustomer");
const {
  httpCreateCustomerAccount,
  httpLoginCustomer,
  httpAddCustomerAddress,
  httpGetAllSellersForCustomers,
  httpGetAllCustomerAddressesById,
  httpDeleteCustomerAddressById,
  httpGetAllBlogs,
  httpGetBlogById,
  httpGetAllCaseStudies,
  httpGetCaseStudyById,
  httpCreateBlogPostByCustomer,
  httpCommentOnBlogPost,
  httpPostContactMe,
  httpGetAllCommentsOnBlog,
  httpReplyOnBlogComment,
  httpGetAllRepliesOnBlogComment,
  httpGetShipmentInfo,
} = require("./customer.controller");

const customerRouter = express.Router();

//auth
customerRouter.post("/get-shipment-info", httpGetShipmentInfo);


module.exports = customerRouter;
