import { Request, Response } from "express"

export const getFavouriteBooks = (req: Request, res: Response) => {
    res.status(200).json({
        "success": true,
        "message": "Favourite books retrieved successfuly"
    })
}
export const createFavouriteBook = (req: Request, res: Response) => {
    req.body;

    res.status(201).json({
        "success": true,
        "message": "Book added to favourites successfuly"
    })
}
export const updateFavouriteBook = (req: Request, res: Response) => {
    req.body;
    req.params.id;

    res.status(200).json({
        "success": true,
        "message": "Favourite book updated successfuly"
    })
}
export const deleteFavouriteBook = (req: Request, res: Response) => {
    req.params.id;
    console.log(req.params.id);

    res.status(200).json({
        "success": true,
        "message": "Favourite book deleted successfuly"
    })
}