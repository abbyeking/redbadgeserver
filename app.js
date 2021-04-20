require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db')

// let podcast = require('./controllers/podcastcontroller');
// let user = require('./controllers/usercontroller');
// let notes = require ('./controllers/notescontroller');

sequelize.sync();
// sequelize.sync({force: true})
app.use(express.json());
app.use(require("./middleware/headers"));
// let controllers = require('./controllers/indexcontroller');

let podcast = require('./controllers/podcastcontroller');
let user = require('./controllers/usercontroller');
let notes = require ('./controllers/notescontroller');

// app.options('*', (req, res) => {
//     res.json({
//       status: 'OK'
//     });
//   });
// app.use(express.json());

app.use('/user', user);
app.use('/podcast', podcast);
app.use('/notes', notes);

app.listen(3000,function (){
  console.log('App is listening on port 3000')
})

// app.listen(process.env.PORT, () => {
//     console.log(`server is listening on port ${process.env.PORT}`)
// })