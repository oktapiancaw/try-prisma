
import express, { Application } from "express";
import cors from 'cors';
import Router from "./routes"
import { env } from "./common/env";

const app: Application = express()

app.use(express.json())
app.get(
    "/hello",
    (req, res) => {
        res.send("hello world")
    }
)

const options: cors.CorsOptions = {
    origin: '*'
}

app.use(
    cors(options)
)

app.use(Router)

app.listen(env.BASE_PORT, () => {
    console.log(`Server is running on http://localhost:${env.BASE_PORT}`)
})