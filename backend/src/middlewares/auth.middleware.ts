
import jwt from 'jsonwebtoken';

const authenticateToken  = (req:any, res:any, next:any) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {
        return res.status(403).json({error: "token not found"})
    }

    jwt.verify(token,process.env.JWT_SECRET as string, (err:any, decoded:any) => {
        if (err) return res.status(403).json({ message: "Invalid or expired token" });
        req.decoded = decoded;
        next();
      });
};

export default authenticateToken;

