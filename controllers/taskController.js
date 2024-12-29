const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) return res.status(400).json({ error: 'El título es obligatorio' });

    const task = new Task({ title, description });
    await task.save();

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { completed } = req.query;
    const filter = completed ? { completed: completed === 'true' } : {};

    const tasks = await Task.find(filter);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const task = await Task.findByIdAndUpdate(id, updates, { new: true });

    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });

    res.status(200).json({ message: 'Tarea eliminada con éxito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};
exports.toggleTaskStatus = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
  
      // Cambiar el estado de completed
      task.completed = !task.completed;
      await task.save();
  
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error al alternar el estado de la tarea', error });
    }
  };