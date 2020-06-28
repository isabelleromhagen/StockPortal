//Routes är den som håller koll på alla requests som görs
// De enda den gör är att matcha anropen till rätt funktion
// I detta fall så kollar den om det är en GET och har /customers som endpoint
// Såfall så ska customers.findAll funktionen anropas

module.exports = (app) => {
  //Retrieve all customers
  const customers = require("../controllers/customer.controller");
  app.post("/create", customers.create);
  app.post("/login", customers.login);
  app.post("/lostPassword", customers.lostPassword);
  app.post("/getProfileInfo", customers.getProfileInfo);
  app.post("/getPreferencesInfo", customers.getPreferencesInfo);
  app.post("/addPreference", customers.addPreference);
  app.post("/deletePreference", customers.deletePreference);
  app.post("/updateUserInfo", customers.updateUserInfo);
  app.post("/updatePassword", customers.updatePassword);
  app.post("/delete", customers.delete);

};
