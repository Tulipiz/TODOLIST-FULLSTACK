// const { response } = require("../app");

const validateFieldTitle = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response
      .status(400)
      .json({ message: "O campo 'titulo' é obrigatorio" });
  }
  if (body.title === "") {
    return response
      .status(400)
      .json({ message: "O campo 'titulo' não pode ser vazio" });
  }

  next();
};

const validateFieldStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response
      .status(400)
      .json({ message: "O campo 'Status' é obrigatorio" });
  }
  if (body.status === "") {
    return response
      .status(400)
      .json({ message: "O campo 'Status' não pode ser vazio" });
  }

  next();
};

module.exports = {
  validateFieldTitle,
  validateFieldStatus,
};
