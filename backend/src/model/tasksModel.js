//model referente as tarefas
const connection = require("./connection");

//função para listar todas as tasks no BD
const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

//criar uma tarefa
const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = "INSERT INTO tasks(title, status, created_at) values (?, ?, ?)";
  const [createdTask] = await connection.execute(query, [
    title,
    "pendente",
    dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

//deletar uma tarefa

const deleteTask = async (id) => {
  const query = "DELETE FROM tasks WHERE id = ?";
  const [removedTask] = await connection.execute(query, [id]);
  return removedTask;
};

//Atualizar uma tarefa

const updateTask = async (id, task) => {
  const { title, status } = task;

  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";

  const [upadtedTask] = await connection.execute(query, [title, status, id]);
  return upadtedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
