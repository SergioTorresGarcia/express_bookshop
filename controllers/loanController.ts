import { Request, Response } from "express"

export const getLoans = (req: Request, res: Response) => {
    res.status(200).json({
        "success": true,
        "message": "Loans retrieved successfuly"
    })
}
export const createLoan = (req: Request, res: Response) => {
    req.body;

    res.status(201).json({
        "success": true,
        "message": "Loan registered successfuly"
    })
}
export const updateLoan = (req: Request, res: Response) => {
    req.body;
    req.params.id;

    res.status(200).json({
        "success": true,
        "message": "Loan updated successfuly"
    })
}
export const deleteLoan = (req: Request, res: Response) => {
    req.params.id;
    console.log(req.params.id);

    res.status(200).json({
        "success": true,
        "message": "Loan deleted successfuly"
    })
}