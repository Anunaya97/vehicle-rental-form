const express = require('express');
const router = express.Router();
const { VehicleType } = require('../models');

//GET /api/vehicle-types
router.get('/', async (req, res) => {
    try {
        const types = await VehicleType.findAll();
        res.json(types);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch vehicle types' });
    }
});
module.exports = router;


