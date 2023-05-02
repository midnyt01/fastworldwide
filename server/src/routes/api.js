const express = require('express')

const adminRouter = require('./admin/admin.route')
const customerRouter = require('./customer/customer.route')

const api = express.Router()

api.use('/customer',customerRouter )
api.use('/admin', adminRouter)


module.exports = api


