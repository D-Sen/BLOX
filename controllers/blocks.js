const Block = require("../models/block");

module.exports = {
  index,
  show,
  new: newBlock,
  create,
  update,
  edit
};

function update(req, res, next) {
    const updateBlock = {
        colorRed: req.body.colorRed,
        colorGreen: req.body.colorGreen,
        colorBlue: req.body.colorBlue,
        colorText: req.body.colorText
    }
    Block.findByIdAndUpdate(req.params.id, updateBlock, { new: true}, function(err, block){
        if (err) {return next(err);} 
        res.redirect(`/blocks/${block._id}`);
    });
}

function edit(req, res, next) {
    Block.findById(req.params.id, function(err, block){
        if (err) {return next(err);}
        res.render('blocks/edit', { title: "Block Detail", block});
    });
}




function index(req, res) {
    Block.find({}, function (err, blocks) {
        res.render("blocks/index", { title: "All Blocks", blocks });
    });
}

function show(req, res) {
    Block.findById(req.params.id)
    .exec(function (err, block) {
        res.render("blocks/show", { title: "Block Detail", block});
    });
}

function newBlock(req, res) {
    res.render("blocks/new", { title: "Add Block" });
}

function create(req, res) {
    // Delete empty properties on req.body for defaults to happen
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    const block = new Block(req.body);
    block.save(function (err) {
        if (err) return res.redirect("/blocks/new");
        //res.redirect(`/blocks/${block._id}`);
        res.redirect("blocks/"); //blocks
    });
}
