import roll from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';

const app = express();
app.use(express.urlencoded({extended: true}));

const args = minimist(process.argv.slice(2));
const port = args.port|| 5000;

app.get('/app/', (req, res) => {
    res.send('200 OK');
});

app.get('/app/roll/', (req, res) => {
    var result = roll(6, 2, 1);
    res.send(result);
});

app.post('/app/roll/', (req, res) => {
    let sides = parseInt(req.body.sides);
    let dice = parseInt(req.body.dice);
    let rolls = parseInt(req.body.rolls);
    var result = roll(sides, dice, rolls)
    res.send(result);
});

app.get('/app/roll/:sides/', (req, res) => {
    let sides = parseInt(req.params.sides);
    var result = roll(sides,2,1)
    res.send(result);
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    var result = roll(sides, dice, 1);
    res.send(result);
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = parseInt(req.params.rolls);
    var result = roll(sides, dice, rolls);
    res.send(result);
})

app.get('*', function(req, res){
    res.send('404 NOT FOUND');
})

app.listen(port);