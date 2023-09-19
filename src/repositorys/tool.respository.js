const { prisma } = require("../services/prisma");

exports.createTool = async (data) => {
  const tool = await prisma.tool.create({
    data,
  });
  return tool;
}
exports.getAll = async () => {
  const tools = await prisma.tool.findMany({});
  return tools;
}

exports.getById = async (id) => {
  const tool = await prisma.tool.findUnique({
    where: {
      id,
    },
  });
  return tool;
}

exports.updateTool = async (id, data) => {
  const tool = await prisma.tool.update({
    where: {
      id,
    },
    data,
  });
  return tool;
}

exports.deleteTools = async (id) => {
  await prisma.tool.delete({
    where: {
      id,
    },
  });
  return;
}

