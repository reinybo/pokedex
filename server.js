// Initialize express application 
const express = require("express");

const app = express();

const pokemons = require("./models/pokemon.js")

const port = 3000

// I is for INDEX

app.get('/pokemon', function(req, res){
    res.render('index.ejs', {
        pokemons: pokemons
    })
})


// N is for NEW

app.get('pokemon/new', function(req, res){
    res.send('new page')
})


// D is for DELETE

app.delete('/pokemon/:id', function(req, res){
    res.send('delete route')
})


// U is for UPDATE

app.put('/pokemon/:id', function(req, res){
    res.send('put route')
})


// C is for CREATE

app.post('/pokemon', function(req, res){
    res.send('post route')
})


// E is for EDIT

app.get('/pokemon/:id/edit', function(req, res){
    res.send('edit page')
})


// S is for SHOW

app.get('/pokemon/:id', function(req, res){
    res.render('show.ejs', {
        pokemon: pokemons[req.params.id]
    })
})


// initialize listener
app.listen(port, function(){
    console.log("server.js listening on port 3000");
})