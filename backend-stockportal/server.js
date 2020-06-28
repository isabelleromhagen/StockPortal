const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const sql = require('./connection-pool');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const portfoliodb = require('./portfolio-queries');
const fileUpload = require("express-fileupload");
const cors = require('cors');
const app = express();

const {deCodeIdToken} = require("./app/utility");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
  createParentPath: true
}));

app.post('/upload-image/',async(req,res)=>{

  try {
    if (!req.files) {

      res.send({
        status: false,
        message: 'No file upload'
      });
    } else {
      const userid = deCodeIdToken(req.body.id_token);
      const uuid = uuidv4();
      let profileImage = req.files.profilepic; //profilpic är namnet på inputField
      const fullName = uuid + "." + profileImage.mimetype.replace("image/","");
      console.log('img uuid name: ' + fullName + "...................................");

      profileImage.mv(`../src/uploads/profilepics/${fullName}`);

      sql.query(`UPDATE users x 
      SET imgname = '${fullName}'
      FROM users y
      WHERE  x.userid = y.userid
      AND x.userid='${userid}'
      RETURNING y.imgname AS old_imgname`, (sqlerr, sqlres) => {
        if (sqlerr) {
          console.log("error", sqlerr);
          res.status(500).json(sqlerr, 'error error error');
          return;
        }

        if(sqlres.rows.length) {

          try {
          fs.unlinkSync(`../src/uploads/profilepics/${sqlres.rows[0].old_imgname}`)
            console.log("file removed");
          } catch(err) {
            console.error(err)
          }
        }
        console.log("updated image");
        res.send({
          status: true,
          message: 'File is uploaded',
        });
      });
    }
  } catch (err) {
    res.status(500).json(err, 'error error error')

  }
});

app.post('/portfolio', portfoliodb.getPortfolio);

require("./app/routes/customer.routes")(app);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
