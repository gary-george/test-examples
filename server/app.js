import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import routes from "./routes";

const hostname = "localhost";
const port = 8088;
const app = express();
const server = http.createServer(app);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "default route",
  })
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
