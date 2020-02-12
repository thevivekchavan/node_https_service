const fs = require("fs"); 
const chalk = require("chalk"); 
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const port = '443';
const express = require("express");
const https = require("https");
const app = express();


const privateKey = fs.readFileSync("ssl/server.key", "utf8");
const certificate = fs.readFileSync("ssl/server.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials,app);

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use(bodyParser.raw({ limit: "10mb", extended: false }));

app.use(cors());


httpsServer.listen(port, () => {
  console.log(
    chalk
      .bgKeyword("gold")
      .keyword("black")
      .bold("              \nHTTPS SERVICE ") +
      chalk.hex("#2eb7ec")(` is running on port `) +
      chalk.green.bold(port) +
      "\n" +
      chalk
        .bgKeyword("gold")
        .keyword("black")
        .bold("              \n")+
chalk.hex("#2eb7ec")(` PRESS Ctrl + C to stop the Service `)
  );
});


app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index.html");
});