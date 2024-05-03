import app from './app';
import dotenv from 'dotenv';
const path = require('path');
import { setupSwagger } from '../config/swagger';

dotenv.config({ path: path.resolve(__dirname, '../.env') });



const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    setupSwagger(app)
});