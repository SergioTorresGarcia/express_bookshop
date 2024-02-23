import express from "express";
import dotenv from "dotenv";
import { getRoles, createRole, updateRole, deleteRole } from "../controllers/roleController";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/userController";
import { createAuthor, deleteAuthor, getAuthors, updateAuthor } from "../controllers/authorController";
import { createBook, deleteBook, getBooks, updateBook } from "../controllers/bookController";
import { createFavouriteBook, deleteFavouriteBook, getFavouriteBooks, updateFavouriteBook } from "../controllers/favBookController";
import { createLoan, deleteLoan, getLoans, updateLoan } from "../controllers/loanController";

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


// TABLE 1 - roles routes
app.get("/roles", getRoles)
app.post("/roles", createRole)
app.put("/roles/:id", updateRole)
app.delete("/roles/:id", deleteRole)

// TABLE 2 - user routes
app.get("/users", getUsers)
app.post("/users", createUser)
app.put("/users/:id", updateUser)
app.delete("/users/:id", deleteUser)

// TABLE 3 - authors routes
app.get("/authors", getAuthors)
app.post("/authors", createAuthor)
app.put("/authors/:id", updateAuthor)
app.delete("/authors/:id", deleteAuthor)

// TABLE 4 - books routes
app.get("/books", getBooks)
app.post("/books", createBook)
app.put("/books/:id", updateBook)
app.delete("/books/:id", deleteBook)

// TABLE 5 - book_favourite routes (users-books)
app.get("/favourite_books", getFavouriteBooks)
app.post("/favourite_books", createFavouriteBook)
app.put("/favourite_books/:id", updateFavouriteBook)
app.delete("/favourite_books/:id", deleteFavouriteBook)

// TABLE 6 - loans routes (users-books)
app.get("/loans", getLoans)
app.post("/loans", createLoan)
app.put("/loans/:id", updateLoan)
app.delete("/loans/:id", deleteLoan)




app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);

})