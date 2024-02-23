import { Request, Response } from "express"

export const getBooks = (req: Request, res: Response) => {
    res.status(200).json({
        "success": true,
        "message": "Books retrieved successfuly"
    })
}
export const createBook = (req: Request, res: Response) => {
    req.body;

    res.status(201).json({
        "success": true,
        "message": "Book created successfuly"
    })
}
export const updateBook = (req: Request, res: Response) => {
    req.body;
    req.params.id;

    res.status(200).json({
        "success": true,
        "message": "Book updated successfuly"
    })
}
export const deleteBook = (req: Request, res: Response) => {
    req.params.id;
    console.log(req.params.id);

    res.status(200).json({
        "success": true,
        "message": "Book deleted successfuly"
    })
}