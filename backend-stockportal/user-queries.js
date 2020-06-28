//Databaskopplingen
//Här skapar vi en pool av databaser

// const Pool = require('pg').Pool
// const dbConfig = require("./app/config/db.config");
// const { response } = require('express');

// var pool = new Pool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER, 
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB,
//   port: dbConfig.PORT,
// });

const pool = require('./connection-pool');
const bcrypt = require("bcrypt");
const { request, response } = require('express');
const fileUpload = require('express-fileupload');




const SALT_ROUNDS = 10;


const getUsers = (request, response) => {
  pool.query('SELECT * FROM PUBLIC.users', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM PUBLIC.users WHERE id=$1', [id], (error, results) => {
    if (error) { throw error; }
    response.status(200).json(results.rows)
  });

};

const createUser = (request, response) => {
  const { email, password } = request.body;
  bcrypt.hash(password, SALT_ROUNDS, (err, hash) => {

    pool.query('INSERT INTO public.users(email, password) VALUES($1,$2) RETURNING *', [email, hash],
      (error, results) => {
        if (error) { throw error; }
        response.status(201).send(`User added with email: ${results.rows[0].email}`)
      });
  })
};
const updateImage = (request, response) => {
  const id = parseInt(request.params.id);
  const { image } = request.body;
  pool.query('UPDATE users SET image= $1 where id=$2',
    [image, id], (error, results) => {
      if (error) { throw error }
      response.status(201).send(`user modified with ID: ${id}`)
    });
};
//for settings/my profile
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { firstName, lastname, socnumber, adress, zipcode, city, email, phone, imageURL } = request.body
console.log(request.body)
  pool.query('UPDATE users SET firstname = $1, lastname= $2, email = $3, socnumber = $4, adress = $5, zipcode = $6, city=$7, phone=$8, image=$9 WHERE id=$10',
    [firstName, lastname, email, socnumber, adress, zipcode, city, phone, imageURL, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send({message:`User modified with ID: ${id}`})
    }
  );
};
//for settings/password
const updatePassword = (request, response) => {
  const id = parseInt(request.params.id)
  const { password, newPaspword } = request.body;
  pool.query('SELECT * FROM PUBLIC.users WHERE id=$1', [id], (err, res) => {
    if (err) {
      response.status(500).send(err, null);
      return;
    }

    if (res.rows.length > 0) {
      bcrypt.compare(password, res.rows[0].password, (err, isCorrect) => {

        if (isCorrect) {

          bcrypt.hash(newpassword, SALT_ROUNDS, (err, hash) => {

            try {
              pool.query(`UPDATE public.users SET password = $2 WHERE id=$1;`,
                [id, hash]);

              response.status(201).send(`PassWord modified with ID: ${id}`);
            }
            catch{
              response.status(500).json(newpassword, "didnt work")
            }

            return;
          })

        } else {
          response.status(500).json(err, "Password didnt match , try again ")

          return;
        }
      });
    } else {
      response.status(500).json(err, "Could find user with id: ", id)
    }
  });

}
//for settings/preferences
const addPreference = (request, response) => {

  const { catid, userid } = request.body;
  pool.query('INSERT INTO public.userprefs(catid, userid) VALUES($1, $2) RETURNING *', [catid, userid], (error, results) => {
    if (error) {
      throw error
    } else {
      response.status(201).send(`Preference added with catid: ${results.rows[0].catid}`)
    }
  })
}

//for settings/preferences
const removePreference = (request, response) => {

  const { catid } = request.body;
  pool.query('DELETE FROM public.userprefs WHERE catid = $1', [catid], (error, results) => {
    if (error) {
      throw error
    } else {
      response.status(200).send(`Preference deleted with catid: ${catid}`)
    }
  })
};

// for dashboard/preferred industries
const getPreferences = (request, response) => {
  pool.query('SELECT userprefs.userid, categories.catname FROM PUBLIC.userprefs JOIN categories ON userprefs.catid=categories.catid', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//TODO error message if customer has stocks, function in react that checks if stocks are empty
//FOR SETTINGS MYPROFILE
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM PUBLIC.users WHERE id = $1', [id], (error, results) => {
    if (error) {
      alert('Du måste sälja dina aktier innan du kan radera din profil');
      throw error
    } else {
      response.status(200).send(`User deleted with ID: ${id}`)
    }

  })
};

// const imageUpload = async (req, res) => {
//   try{
//     if(!req.files){
//       res.send({
//         status: false,
//         message: 'No file upploaded'
//       });
//     }else{
//       let avatar=req.files.avatar;
//       profileImage.mv('./images'+avatar.name);
//       res.send({
//         status: true,
//         message: 'File is uploaded',
//         data: {
//           name: avatar.name,
//           mimetype: avatar.mimetype,
//           size: avatar.size
//         }
//       });
//     }
//   }catch(err){
//     res.status(500).send(err)
//   }

// };
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  addPreference,
  removePreference,
  getPreferences,
  deleteUser,
  updatePassword,
  // imageUpload,

};

