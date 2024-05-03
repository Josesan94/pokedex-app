
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../../.env') });


const generateStaticToken = () => {
    const payload = {
        access: "api"
    };
    const secret = process.env.JWT_SECRET as string;
    const options = { expiresIn: '24h' };

    const token = jwt.sign(payload, secret, options);
    return token;
};

generateStaticToken();