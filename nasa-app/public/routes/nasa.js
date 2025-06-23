const express = require('express');
const axios = require('axios');
const router = express.Router();
const API_KEY = process.env.NASA_API_KEY;

// APOD endpoint
router.get('/apod', async (req, res) => {
  try {
    const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD' });
  }
});

// Mars Rover Photos
router.get('/rovers', async (req, res) => {
  const { rover = 'curiosity', sol = 1000 } = req.query;
  try {
    const result = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${API_KEY}`);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Mars photos' });
  }
});

module.exports = router;
