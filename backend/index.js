import express from "express"
import mongoose from "mongoose"
import routes from "./routes/index.js"
import cors from "cors"
import "dotenv/config"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/api/v1", routes);


(async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB CONNECTED")

    app.listen(process.env.PORT, () => {
        console.log(`listening at port ${process.env.PORT}`)
    })
} catch (error) {
    console.log(error)
}
})()

