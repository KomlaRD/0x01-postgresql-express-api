import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express";

// Initialize environment variables
dotenv.config()

const { TOKEN_SECRET } = process.env


// Aunthenticate function
const verifyAuthToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        let authorizationHeader = req.headers.authorization;
        const token = (authorizationHeader as string | undefined);
        authorizationHeader = authorizationHeader?.split('')[1];
        const decoded = jwt.verify(token as string, TOKEN_SECRET!);

        next();
    } catch (err) {
        res.status(401);
        res.json('Access Denied');
        return 
    }
}

export default verifyAuthToken;