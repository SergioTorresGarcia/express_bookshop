import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;

app.get("/alive", (req, res) => {
    res.send("Server is alive")
})

app.get("/heathy", (req, res) => {
    res.status(200).json(
        {
            "success": true,
            "message": "Server is healthy"
        }
    )
    // res.send("Server is healthy")

})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);

})