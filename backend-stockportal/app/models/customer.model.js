//För att vara säkra på att få rätt data så jobbar vi med modeller
// Modellen tar hand om att replikera en modell på hur resultatet från databasen kommer se ut
// Detta fall Customer. I modellen görs även queries mot databasen och här kan de finnas flera metoder
// T.ex kan vi har getById som tar ett ID och hämtar då endast data för de ID:et.

const sql = require('../../connection-pool');
const bcrypt = require("bcrypt");
const { createIDToken, deCodeIdToken} = require("../utility");
const SALT_ROUNDS = 10;

const Customer = function (customer) {
  this.userid = customer.userid;
  this.firstname = customer.firstname;
  this.lastname = customer.lastname;
  this.email = customer.email;
  this.adress = customer.adress;
  this.zipcode = customer.zipcode;
  this.city = customer.city;
  this.phone = customer.phone;
  this.socnumber = customer.socnumber;
  this.password = customer.password;
  this.secretword = customer.secretword;
  this.catname = customer.catname;
  this.imgname = customer.imgname;
};


Customer.updateUserInfo = (id_token, userSettings, result) => {

  bcrypt.hash(userSettings.socnumber, SALT_ROUNDS, (err, socHash) => {

    const userObject = [
      userSettings.firstname,
      userSettings.lastname,
      userSettings.email,
      socHash,
      userSettings.adress,
      userSettings.zipcode,
      userSettings.city,
      userSettings.phone,
      deCodeIdToken(id_token)
    ];

    sql.query('UPDATE users SET firstname = $1, lastname= $2, email = $3, socnumber = $4, adress = $5, zipcode = $6, city=$7, phone=$8 WHERE userid=$9', userObject, (err, res) => {
      if (err) {
        console.log("error", err);
        result(err, null);
        return;
      }

      console.log("updated user");
      result(null, { sucess: true });
    });
  });
};

Customer.create = (newUser, result) => {
  bcrypt.hash(newUser.password, SALT_ROUNDS, (err, passHash) => {
    bcrypt.hash(newUser.secretword, SALT_ROUNDS, (err, secretHash) => {
      sql.query(`INSERT INTO users(email, password, secretword) VALUES('${newUser.email}','${passHash}','${secretHash}')`, (err, res) => {
        if (err) {
          console.log("error", err);
          result(err, null);
          return;
        }

        console.log("Created user", { id: res.insertId, ...newUser });
        result(null, { sucess: true });
      });
    });
  });
};

Customer.lostPassword = (user, result) => {
  const { email, secretword } = user;

  sql.query(`SELECT * from users WHERE email = '${email}'`, (err, res) => {
    if (err) {
      console.log("error: No user found ", err);
      result(err, null);
      return;
    }
    console.log(res.rows.length);
    if (res.rows.length) {
      console.log("found user, checking secret");

      bcrypt.compare(secretword, res.rows[0].secretword, (err, isCorrect) => {
        if (isCorrect) { 
          console.log("Secret correct");
          sql.query(`UPDATE users SET password = '${res.rows[0].secretword}' WHERE email = '${email}'`, (err, res) => {
            if (err) {
              console.log("error", err);
              result(err, null);
              return;
            }
        
            console.log("updated password to secret");
            result(null, { sucess: true });
          });
        } else {
          console.log("Incorrect secret");
          result({ type: "incorrect_secret" }, null);
          return;
        }
      });
    } else {
      result({ type: "not_found" }, null);
    }
  });
};

Customer.updatePassword = (id_token, new_password, old_password, result) => {

  const userid = deCodeIdToken(id_token);
  sql.query(`SELECT password from users WHERE userid = '${userid}'`, (err, res) => {
    if (err) {
      console.log("error: No user found ", err);
      result(err, null);
      return;
    }
    console.log(res.rows.length);
    if (res.rows.length) {
      console.log("found user, checking pass");

      bcrypt.compare(old_password, res.rows[0].password, (err, isCorrect) => {
        if (isCorrect) { 
          console.log("Pass correct");
          
          bcrypt.hash(new_password, SALT_ROUNDS, (err, hash) => { 
            sql.query(`UPDATE users set password= '${hash}' WHERE userid='${userid}'`, (err, res) => {
              if (err) {
                result({ type: "Something went wrong trying to update password"}, null);
              }
              else{
                result(null, { sucess: true })
              }
            });
          });
        } 
        else {
          console.log("Incorrect password");
          result({ type: "incorrect_password" }, null);
          return;
        }
      });
    } 
    else {
      result({ type: "not_found" }, null);
    }
  });
};

Customer.login = (user, result) => {
  const { email, password } = user;

  console.log(email);
  console.log(password);

  sql.query(`SELECT * from users WHERE email = '${email}'`, (err, res) => {
    if (err) {
      console.log("error: No user found ", err);
      result(err, null);
      return;
    }
    console.log(res.rows.length);
    if (res.rows.length) {
      console.log("found user, checking pass");

      bcrypt.compare(password, res.rows[0].password, (err, isCorrect) => {
        if (isCorrect) { 
          console.log("Pass correct");
          console.log("Found user", res.rows[0]);
          result(null, {id_token: createIDToken(res.rows[0].userid)});
          return;
        } else {
          console.log("Incorrect password");
          result({ type: "incorrect_password" }, null);
          return;
        }
      });
    } else {
      result({ type: "not_found" }, null);
    }
  });
};

Customer.getProfileInfo = (id_token, result) => {
  const userId = deCodeIdToken(id_token);
  console.log(userId + " is the userid");

  sql.query(`SELECT firstname,lastname,email,adress,zipcode,city,phone,socnumber,imgname from users WHERE userid = '${userId}'`, (err, res) => {
    if (err) {
      console.log("error: No user found ", err);
      result(err, null);
      return;
    }
    if (res.rows.length) {
      result(null, res.rows[0]);
    }
    
  });
};

Customer.addPreference  = (id_token, catid, result) => {
  const userId = deCodeIdToken(id_token);

  sql.query(`INSERT INTO userprefs(catid, userid) VALUES('${catid}','${userId}')`, (err, res) => {
    if (err) {
      console.log("error: Something went wrong ", err);
      result(err, null);
    }
    else {
      result(null, { sucess: true });
    }
  });
};

Customer.deletePreference  = (id_token, catid, result) => {
  const userId = deCodeIdToken(id_token);

  sql.query(`DELETE FROM userprefs WHERE catid='${catid}' AND userid='${userId}'`, (err, res) => {
    if (err) {
      console.log("error: Something went wrong ", err);
      result(err, null);
    }
    else {
      result(null, { sucess: true });
    }
  });
};

Customer.getPreferencesInfo = (id_token, result) => {
  const userId = deCodeIdToken(id_token);

  sql.query(`SELECT categories.catname, categories.color FROM userprefs JOIN categories ON userprefs.catid=categories.catid WHERE userid = '${userId}'`, (err, res) => {
    if (err) {
      console.log("error: Something went wrong ", err);
      result(err, null);
      return;
    }
    if (res.rows.length) {
      result(null, res.rows);
    }
    else {
      result(null, {});
    }
    
  });
};

Customer.delete = (id_token, result) => {
  const userId = deCodeIdToken(id_token);
  sql.query(`UPDATE users SET firstname = '', lastname= '', socnumber = '', adress = '', zipcode = '', city='', phone='' WHERE userid = '${userId}'`, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }
    result(null, { sucess: true });
  });
};

module.exports = Customer;
