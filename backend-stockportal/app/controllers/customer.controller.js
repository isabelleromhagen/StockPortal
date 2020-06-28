//Controllers är den själva mellanhanden mellan Modeller och routes.
//Den kommer returnera tillbaka ett felmeddelande eller resultatet den får från modellen
//Här kan andra metoder också finnas. T.ex findById och då kommer ID:et finnas i req objektet

const Customer = require("../models/customer.model");

exports.getProfileInfo = (req, res) => {
  console.log(req.body.id_token + " is the token");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.id_token) {
    res.status(400).send({
      message: "Token can not be empty!",
    });
    return;
  }
  Customer.getProfileInfo(req.body.id_token, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error when fetching user...",
      });
    } else {
      res.send(data);
    }
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const user = new Customer({
    email: req.body.email,
    password: req.body.password,
    secretword: req.body.secretword
  });

  console.log(res.body)

  Customer.create(user, (err, data) => {
    if (err) {
      if (err.message.includes("duplicate key value")) {
        res.status(500).send({
          message: "This email already exists",
        });
        return;
      }

      res.status(500).send({
        message: err.message || "Some occur while creating a user",
      });
    } else {
      res.send(data);
    }
  });
};

exports.updateUserInfo = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.id_token) {
    res.status(400).send({
      message: "Token can not be empty!",
    });
    return;
  }

  const id_token = req.body.id_token;
  const user = new Customer({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    adress : req.body.adress,
    zipcode : req.body.zipcode,
    city : req.body.city,
    phone : req.body.phone,
    socnumber : req.body.socnumber,
  });

  console.log(res.user)

  Customer.updateUserInfo(id_token, user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some occur while editing profile",
      });
    } else {
      res.send(data);
    }
  });
};

exports.updatePassword = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.id_token) {
    res.status(400).send({
      message: "Token can not be empty!",
    });
    return;
  }

  if (!req.body.old_password || !req.body.new_password) {
    res.status(400).send({
      message: "password can not be empty!",
    });
    return;
  }

  const id_token = req.body.id_token;
  const new_password = req.body.new_password;
  const old_password = req.body.old_password;

  console.log(res.user)

  Customer.updatePassword(id_token, new_password, old_password, (err, data) => {
    if (err) {
      if(err.type == "incorrect_password") 
      {
        res.status(500).send({
          message: err.message || "Ditt lösen är fel.",
        });
        return;
      }
      res.status(500).send({
        message: err.message || "Some occur while changing password",
      });
      
    } else {
      res.send(data);
    }
  });
};

exports.lostPassword = (req, res) => {
  const user = new Customer({
    email: req.body.email,
    secretword: req.body.secretword
  });
  
  Customer.lostPassword(user, (err, data) => {
    if (err) {
      if (err.type === "not_found" || err.type === "incorrect_secret") {
        res.status(404).send({
          message: "Wrong email or secret",
        });
      } else {
        res.status(500).send({
          message: "Error when fetching user...",
        });
      }
    } else {
      res.send(data);
    }
  }); 
};

exports.login = (req, res) => {
  const user = new Customer({
    email: req.body.email,
    password: req.body.password
  });
  
  Customer.login(user, (err, data) => {
    if (err) {
      if (err.type === "not_found" || err.type === "incorrect_password") {
        res.status(404).send({
          message: "Wrong email or password",
        });
      } else {
        res.status(500).send({
          message: "Error when fetching user...",
        });
      }
    } else {
      res.send(data);
    }
  }); 
};

exports.getPreferencesInfo = (req, res) => {
  console.log(req.body.id_token + " is the token");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.id_token) {
    res.status(400).send({
      message: "Token can not be empty!",
    });
    return;
  }
  Customer.getPreferencesInfo(req.body.id_token, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error when fetching preferences...",
      });
    } else {
      res.send(data);
    }
  });
};

exports.addPreference  = (req, res) => {
  console.log(req.body.id_token + " is the token");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.id_token) {
    res.status(400).send({
      message: "Token can not be empty!",
    });
    return;
  }
  if (!req.body.catid) {
    res.status(400).send({
      message: "cat id can not be empty!",
    });
    return;
  }
  Customer.addPreference(req.body.id_token, req.body.catid, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error when adding preference...",
      });
    } else {
      res.send(data);
    }
  });
};

exports.deletePreference = (req, res) => {
  console.log(req.body.id_token + " is the token");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.id_token) {
    res.status(400).send({
      message: "Token can not be empty!",
    });
    return;
  }
  if (!req.body.catid) {
    res.status(400).send({
      message: "cat id can not be empty!",
    });
    return;
  }
  Customer.deletePreference(req.body.id_token, req.body.catid, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error when deleting preference...",
      });
    } else {
      res.send(data);
    }
  });
};

exports.delete = (req, res) => {
  console.log(req.body.id_token + " is the token");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.id_token) {
    res.status(400).send({
      message: "Token can not be empty!",
    });
    return;
  }
  Customer.delete(req.body.id_token, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error when deleting account...",
      });
    } else {
      res.send(data);
    }
  });
};

