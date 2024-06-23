const express = require('express');
const app = express();
const userRoute = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config(); // Import environment variables from .env file

app.use(express.json());
const sequelize = require('./config/db.config');

console.log('The app is running at port', process.env.PORT,process.env.PASSWORD,process.env.DB);

sequelize.sync(() => {
  // Sync database tables
}).then(() => {
  console.log('Synced db');
}).catch((error) => {
  console.log(error);
});



app.use('/users', userRoute);
const port = process.env.PORT;

console.log("hello world")


app.listen(port || 3001, () => {
  console.log(`Server is running ${port || 3001}`);
});