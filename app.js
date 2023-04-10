import express from 'express';
import dotenv from 'dotenv';
import { route as Route } from "./route.js";

dotenv.config();

const app = express();

app.use(express.json())

app.use("/todo", Route)

app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
})


