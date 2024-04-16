import app from './app';

const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});