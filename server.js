// Initialize express application 
const express = require("express");

const app = express();

const pokemons = require("./models/pokemon.js")

const port = 3000

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("I run for all routes")
    next()
  })

//include the method-override package
const methodOverride = require("method-override")
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"))


// I is for INDEX

app.get('/pokemon', function(req, res){
    res.render('index.ejs', {
        pokemons: pokemons
    })
})


// N is for NEW

app.get('/pokemon/new', function(req, res){
    res.render('new.ejs')
})


// D is for DELETE

app.delete('/pokemon/:id', function(req, res){
    pokemons.splice(req.params.id, 1) //remove the item from the array
    res.redirect("/pokemon") //redirect back to index route
})


// U is for UPDATE

app.put('/pokemon/:id', function(req, res){
    pokemons[req.params.id] = req.body //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
    res.redirect("/pokemon") //redirect to the index page
})


// C is for CREATE

app.post('/pokemon', function(req, res){
    console.log(req.body)
    pokemons.push(req.body)
    res.redirect('/pokemon')
})


// E is for EDIT

app.get('/pokemon/:id/edit', function(req, res){
    res.render('edit.ejs', {
        pokemon: pokemons[req.params.id],
        index: req.params.id
    })
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