import express from 'express';
import http from 'http';
import cors from 'cors';
import { testRouter } from './routes/auth.routes';

const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

app.get('/', (_req, res) => {
    res.send("server works");
});

//Routes
app.use('/test', testRouter);

server.listen(PORT, () => {
    console.log('Server runing on http://localhost:8080')
});