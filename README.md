# Task Manager Backend

## Descripción
Task Manager Backend es una API RESTful desarrollada con Node.js, Express y MongoDB Atlas. Permite gestionar tareas con funcionalidades como crear, leer, actualizar, eliminar y alternar el estado de las tareas (pendiente/completada). La documentación de la API está disponible mediante Swagger.

## Características principales
- Crear tareas con título y descripción opcional.
- Obtener una lista de tareas con filtrado por estado.
- Obtener los detalles de una tarea específica.
- Actualizar el título y descripción de una tarea.
- Eliminar una tarea.
- Alternar el estado de una tarea entre pendiente y completada.
- Documentación interactiva de la API con Swagger.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB Atlas
- Swagger (para documentación)
- dotenv (para configuración de variables de entorno)
- express-validator (para validaciones)
- nodemon (entorno de desarrollo)

## Requisitos previos
- [Node.js](https://nodejs.org/) (v16 o superior)
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Variables de entorno
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
PORT=5000
MONGO_URI=mongodb+srv://martinaschaller12:mabril21@cluster0.i8hjp.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=Cluster0
```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/taskManager.git
   cd taskManager
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en un archivo `.env` siguiendo el ejemplo anterior.

4. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

5. Alternativamente, inicia el servidor en modo producción:
   ```bash
   npm start
   ```

6. Accede a la API en `http://localhost:5000` (o en el puerto configurado).

7. La documentación interactiva estará disponible en: `http://localhost:5000/api-docs`.

## Endpoints principales

### Tareas
- **GET** `/api/tasks` - Obtener todas las tareas (opcional: filtrar por estado).
- **GET** `/api/tasks/:id` - Obtener detalles de una tarea específica.
- **POST** `/api/tasks` - Crear una nueva tarea.
- **PUT** `/api/tasks/:id` - Actualizar una tarea existente.
- **DELETE** `/api/tasks/:id` - Eliminar una tarea.
- **PATCH** `/api/tasks/:id/toggle` - Alternar el estado de una tarea (pendiente/completada).

### Ejemplo de respuesta
**GET** `/api/tasks`
```json
[
  {
    "_id": "63a0bba7657348c1d1f6b940",
    "title": "Comprar leche",
    "description": "Ir al supermercado",
    "completed": false,
    "createdAt": "2024-12-29T10:00:00.000Z"
  }
]
```

## Scripts disponibles
- `npm run dev`: Inicia el servidor con nodemon para desarrollo.
- `npm start`: Inicia el servidor en modo producción.

## Documentación de la API
La documentación de la API está generada con Swagger y está disponible en:
```
/api-docs
```
