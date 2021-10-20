import express from 'express';
import path from 'path';

import { requestTime } from './middlewares.js';

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(requestTime);

app.get('/download', (req, res) => {
    console.log(req.requestTime);
    res.download(path.resolve(__dirname, 'static', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});