var express = require('express');
var router = express.Router();

// he copied and paste the record template here and changed everything with record into:
//  order and Orders , Order
const {
  getAllOrders,
  addOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/ordersController');

router.route('/').get(getAllOrders).post(addOrder);

router
  .route('/:id')
  .get(getOrder)
  .patch(updateOrder)
  .delete(deleteOrder);

module.exports = router;