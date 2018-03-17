const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
let app = express();
// app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    let date = new Date().toString();
    let log = `${date}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + "\n", (err) => {
        if (err) {
            console.log('Unable to find');
        }
    })
    next();
})
// app.use((req, res, next) => {
//     res.render('maintenence.hbs');


// })

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();

})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();

})



app.get('/', (req, res) => {


    res.render('home.hbs', {
        pageTitle: 'Home Page',


    });
})



app.get('/about', (req, res) => {


    res.render('about.hbs', {
        pageTitle: 'About Page',

    });
})

app.get('/bad', (req, res) => {
    console.log(res);
    res.send({
        errorMessage: 'Unable to find'
    })


})
app.listen(6600, () => {
    console.log('Starting the server');
});