const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
let Parser = require('rss-parser');
// const { render } = require('ejs');
let parser = new Parser();

dotenv.config();
const app = express();
app.use(cors());
app.set('view engine', 'ejs');


app.listen(process.env.PORT || 8080, () => {
    console.log(`running on ${process.env.PORT || 8080}`);
})

// (async () => {

//   let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
//   console.log(feed.title);
//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });
// })();

app.get('/', (req, res) => {
    parser.parseURL('https://www.thefactsite.com/feed/')
        .then(data => {
            console.log(data);
            res.render('pages/index.ejs', {
                data: data
            })
        })
        .catch(e => {
            console.log(`!!!your error is:${e}`);
        })
})

app.get('/search', (req, res) => {
    const {q}=req.query;
    console.log(q);
    parser.parseURL('https://www.thefactsite.com/feed/')
        .then(data => {
            res.render('pages/search.ejs', {
                data: data,
                chosen:q
            })
            })
        .catch(e => {
            console.log(`!!!your error is:${e}`);
        })
})

