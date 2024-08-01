const {AddCategory} = require('../controller/categoryController')
const express = require('express');
const router = express.Router();

/**
 * @description To post the category
 * @api /api/category/
 * @access PRIVATE
 * @type POST
 * @return response
 */

router.post('/category', AddCategory)

module.exports = router
