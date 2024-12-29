const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para la documentación de Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
console.log('Swagger docs available at http://localhost:5000/api-docs');

// Ruta base
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de gestión de tareas. Visita /api-docs para ver la documentación.');
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Conexión a MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Rutas de la API
app.use('/api/tasks', taskRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

