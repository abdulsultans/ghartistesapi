const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const usersRoute = require("./routes/usersRoute")

const connectDB = require("./config/connectDB");

const artistesRoute = require("./routes/artistesRoute");

dotenv.config();

//Connecting to the database
connectDB();

//Middle wares
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v6/artistes", artistesRoute);
app.use("/api/v6/users", usersRoute);

//Default / Home route
app.get("/", (req, res) => {
  res.send("<h2> Welcome to Ghana artistes API.</h2>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on https://localhost:${PORT}`));
