const express = require('express');
const router = express.Router();
const { Vehicle, VehicleType } = require('../models');

// GET /api/vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll({
            include: [{ model: VehicleType, as: 'type' }]
        });
        res.json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch vehicles' });
    }
});

module.exports = router;