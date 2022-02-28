const express = require('express')
const router = express.Router()
const { getGoal, setGoal,updateGoal,deleteGoal } = require('../controllers/goalController')

// Shortened routes code for the REST API methods
router.route('/').get(getGoal).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router