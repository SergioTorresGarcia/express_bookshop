import express from "express";



export const app = express();

app.use(express.json()); // parsea las req a json (sólo una vez en general, en lugar de ir poniendolo en cada ruta)


app.get("/alive", (req, res) => {
    res.send("Server is alive")
})

app.get("/healthy", (req, res) => {
    res.status(200).json(
        {
            "success": true,
            "message": "Server is healthy"
        }
    )
})






