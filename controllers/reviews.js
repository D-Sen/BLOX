const Movie = require('../models/movie')

module.exports = {
    create,
    delete: deleteReview
}

function create(req, res) {
    Movie.findById(req.params.id, function(err, movie) {

        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        movie.reviews.push(req.body)
        movie.save(function(err) {
            res.redirect(`/movies/${movie._id}`)
        })
    })
}

async function deleteReview(req, res, next) {
    try {
        const movie = await Movie.findOne({'reviews._id': req.params.id})
        if (!movie) return res.redirect('/movies')
        movie.reviews.remove(req.params.id)
        await movie.save()
        res.redirect(`/movies/${movie._id}`)
    } catch(err) {
        return next(err)
    }
}