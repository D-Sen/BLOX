const Block = require("../models/block");

module.exports = {
  index,
  show,
  new: newBlock,
  create,
};

function index(req, res) {
  Block.find({}, function (err, blocks) {
    res.render("blocks/index", { title: "All Blocks", blocks });
  });
}

function show(req, res) {
  Block.findById(req.params.id)
    .exec(function (err, block) {
        console.log(block);
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
    console.log(block);
    res.redirect(`/blocks/${block._id}`);
  });
}
