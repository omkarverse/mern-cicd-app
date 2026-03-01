const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

// Create
router.post('/resources', async (req, res) => {
    try {
        const newResource = new Resource(req.body);
        const savedResource = await newResource.save();
        res.status(201).json(savedResource);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read all
router.get('/resources', async (req, res) => {
    try {
        const resources = await Resource.find().sort({ createdAt: -1 });
        res.json(resources);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update
router.put('/resources/:id', async (req, res) => {
    try {
        const updatedResource = await Resource.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(updatedResource);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete
router.delete('/resources/:id', async (req, res) => {
    try {
        await Resource.findByIdAndDelete(req.params.id);
        res.json({ message: 'Resource deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
