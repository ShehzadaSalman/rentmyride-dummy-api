import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(`Node and express server running on PORT ${PORT}`)
);

app.listen(process.env.PORT || PORT, () =>
  console.log(`your server is running on the port ${PORT}`)
);
