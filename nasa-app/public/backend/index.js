const express = require('express');
const cors = require('cors');
require('dotenv').config();
const nasaRoutes = require('./routes/nasa');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/nasa', nasaRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
