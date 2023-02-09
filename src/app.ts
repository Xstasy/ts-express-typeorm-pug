import { Database } from './db/index';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 4838;
app.set('view engine', 'pug');

app.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Hey' })
});

Database.initialize().then(() => {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
})
