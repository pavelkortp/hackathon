import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';

const app: Express = express();
const port: number = 8080;

enum Button {
    PLUS = 'PLUS' ,
    MINUS = 'MINUS'
}

const counters = {
    'PLUS': 0,
    'MINUS': 0
}


app.use(express.static('front'));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.sendFile('index.html');
});

app.patch('/', (req: Request, res: Response) => {
    const o : {btn: Button} = req.body;
    if (o.btn == Button.MINUS) {
        res.json({
            plus: counters.PLUS,
            minus: ++counters.MINUS
        });
    } else {
        res.json({
            plus: ++counters.PLUS,
            minus: counters.MINUS
        });
    }

})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})

