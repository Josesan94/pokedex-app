import express , {Request, Response} from 'express'
import axios from 'axios';
import cors from 'cors';



const app = express();
app.use(cors())


const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;


app.get('/', (req:Request, res:Response) => {
    res.send(`server is running`)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });