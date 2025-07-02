const express = require('express');
const router = express.Router();
const { Booking, Vehicle } = require('../models');

// POST /api/bookings
router.post('/', async (req, res) => {
    try {
        const { customerName, customerEmail, vehicleId, startDate, endDate } = req.body;

        // Fetch the vehicle to get price
        const vehicle = await Vehicle.findByPk(vehicleId);
        if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });

        // Calculate number of days
        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

        if (days <= 0) return res.status(400).json({ error: 'End date must be after start date' });

        const totalCost = days * parseFloat(vehicle.pricePerDay);

        // Create booking
        const booking = await Booking.create({
            customerName,
            customerEmail,
            vehicleId,
            startDate,
            endDate,
            totalCost,
        });

        res.status(201).json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create booking' });
    }
});

module.exports = router;