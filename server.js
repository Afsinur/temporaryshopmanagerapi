const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
let port_ = process.env.PORT || "5150";
const listen_ = () => {
  console.log(`listening on port ${port_}`);
};

const ApiRoutes = require("./routes/ApiRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", ApiRoutes);

//dbURI
const dbURI = `mongodb+srv://afsinurrahman1:a01794642816@cluster0.6kzystu.mongodb.net/shopmanagerusers?retryWrites=true&w=majority`;
const dbURIoptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//connection function
(async () => {
  await mongoose.connect(dbURI, dbURIoptions);
  console.log(`DB connected!`);

  app.listen(port_, listen_);
})();
