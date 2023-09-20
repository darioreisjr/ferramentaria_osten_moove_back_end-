const { toolRoutes } = require("./tool.routes");
const { userRoutes } = require("./user.routes");

module.exports = (app) => {
  toolRoutes(app);
  userRoutes(app);
}