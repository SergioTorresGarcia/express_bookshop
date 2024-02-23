import express from "express";
import dotenv from "dotenv";
import { getRoles, createRole, updateRole, deleteRole } from "../controllers/roleController";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/userController";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;

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

// roles routes
app.get("/roles", getRoles)
app.post("/roles", createRole)
app.put("/roles", updateRole)
app.delete("/roles", deleteRole)

// user routes
app.get("/users", getUsers)
app.post("/users", createUser)
app.put("/users", updateUser)
app.delete("/users", deleteUser)


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);

})