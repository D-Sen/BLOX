const Block = require('../models/block')

module.exports = {
    create,
    delete: deleteMessage
}

function create(req, res) {
    Block.findById(req.params.id, function(err, block) {

        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        block.messages.push(req.body)
        block.save(function(err) {
            res.redirect(`/blocks/${block._id}`)
        })
    })
}

async function deleteMessage(req, res, next) {
    try {
        const block = await Block.findOne({'messages._id': req.params.id})
        if (!block) return res.redirect('/blocks')
        block.messages.remove(req.params.id)
        await block.save()
        res.redirect(`/blocks/${block._id}`)
    } catch(err) {
        return next(err)
    }
}
