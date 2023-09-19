const { createTool, getAll, getById, updateTool, deleteTools } = require("../repositorys/tool.respository");

exports.create = async (req, res) => {
  try {
    const tool = await createTool(req.body);
    res.status(200).send(tool);
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.get = async (req, res) => {
  try {
    const tools = await getAll();
    res.status(200).send(tools);
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.getId = async (req, res) => {
  try {
    const tool = await getById(req.params.id);
    res.status(200).send(tool);
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.update = async (req, res) => {
  try {
    const tool = await updateTool(req.params.id, req.body);
    res.status(200).send(tool);
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.remove = async (req, res) => {
  try {
    await deleteTools(req.params.id);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
}

