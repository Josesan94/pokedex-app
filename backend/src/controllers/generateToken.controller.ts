
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
import { Request, Response } from 'express';


export const generateToken = async (req: Request, res: Response) => {
    const payload = {
        access: "api"
    };
    console.log("ingreso a generar token")
    try {
    const secret = process.env.JWT_SECRET as string;
    const options = { expiresIn: '24h' };
    const token = jwt.sign(payload, secret, options)
    console.log(token)

    return res.json({token})

    } catch(error:any) {
        res.status(500).send(error.message);
    }
};


export const generateStaticToken = async () => {
    const payload = {
        access: "api"
    };
    const secret = process.env.JWT_SECRET as string;
    const options = { expiresIn: '24h' };

    const token = jwt.sign(payload, secret, options);

    return token;
};

generateStaticToken();