import express from 'express';
import cors from 'cors';
import talleresRoutes from './routes/talleres.routes.js';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/talleres', talleresRoutes);

app.get('/', (req, res) => {
    res.send('Server is working');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});