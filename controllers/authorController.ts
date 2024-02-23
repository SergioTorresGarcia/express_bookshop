import { Request, Response } from "express"

export const getAuthors = (req: Request, res: Response) => {
    res.status(200).json({
        "success": true,
        "message": "Authors retrieved successfuly"
    })
}
export const createAuthor = (req: Request, res: Response) => {
    req.body;

    res.status(201).json({
        "success": true,
        "message": "Author created successfuly"
    })
}
export const updateAuthor = (req: Request, res: Response) => {
    req.body;
    req.params.id;

    res.status(200).json({
        "success": true,
        "message": "Author updated successfuly"
    })
}
export const deleteAuthor = (req: Request, res: Response) => {
    req.params.id;
    console.log(req.params.id);

    res.status(200).json({
        "success": true,
        "message": "Author deleted successfuly"
    })
}