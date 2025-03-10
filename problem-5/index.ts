import express, { Express, Request, Response } from "express";
import routes from "./src/routes/index.routes";
import * as database from "./src/configs/db.config";
import dotenv from "dotenv";
dotenv.config();
const app: Express = express();
const port: string | number = process.env.PORT as string;

//Connect to database
database.connect();

app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
