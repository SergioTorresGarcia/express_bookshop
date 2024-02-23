import express from "express";
import dotenv from "dotenv";
import { getRoles, createRole, updateRole, deleteRole } from "../controllers/roleController";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/userController";
import { createAuthor, deleteAuthor, getAuthors, updateAuthor } from "../controllers/authorController";

dotenv.config();

const app = express();

app.use(express.json()); // parsea las req a json

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
app.put("/roles/:id", updateRole)
app.delete("/roles/:id", deleteRole)

// user routes
app.get("/users", getUsers)
app.post("/users", createUser)
app.put("/users/:id", updateUser)
app.delete("/users/:id", deleteUser)

// authors routes
app.get("/authors", getAuthors)
app.post("/authors", createAuthor)
app.put("/authors/:id", updateAuthor)
app.delete("/authors/:id", deleteAuthor)


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);

})