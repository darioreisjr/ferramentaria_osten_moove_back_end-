const { hash } = require("bcrypt");
const { prisma } = require("../services/prisma");

exports.createUser = async (data) => {

  let userexists = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });
  if (userexists) {
    throw new Error("Erro: usuário já existe")
  }


  const HashPassword = await hash(data.password, 8)

  const user = await prisma.user.create({
    data:{
      name: data.name,
      email: data.email,
      password: HashPassword
    }
  });
  return user;
}
exports.getAll = async () => {
  const users = await prisma.user.findMany({});
  return users;
}

exports.getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}

exports.updateUser = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return user;
}

exports.deleteUsers = async (id) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
  return;
}

