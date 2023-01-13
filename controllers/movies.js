const Movie = require('../models/movie')

module.exports = {
    index,
    new: newMovie,
    create,
}

function index(req, res) {
    Movie.find({}, function(err, movies) {
        console.log(movies)
        if (!err) res.render('movies/index', { movies })
        res.redirect('/')
    })
}

function newMovie(req, res) {
    res.render('movies/new')
}

function create(req, res) {
    //convert nowShowing to Boolean
    req.body.nowShowing = !!req.body.nowShowing

    //remove whiteSpace and split into Array
    req.body.cast = req.body.cast.trim();
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    
    const movie = new Movie(req.body)
    movie.save(function(err) {
        if (err) console.log(err)
        if (err) return res.redirect('/movies/new')
        console.log(movie)
        res.redirect('/movies/new')
    })

}