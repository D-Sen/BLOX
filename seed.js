require('dotenv').config()
require('./config/database');

const Block = require('./models/block')
//const Performer = require('./models/performer')

const data = require('./data')

const p1 = Block.deleteMany({})
//const p2 = Performer.deleteMany({})

Promise.all([p1])
	
    .then(function(results) {
        console.log(results)
        return Block.create(data.blocks)
    })
    .then(function(results) {
        console.log(results)
        process.exit()
    })
    
/*
 Block.deleteMany({})
     .then(function(results) {
         console.log('Deleted blocks: ', results)
         return Block.deleteMany({})
     })
     .then(function() {
         process.exit()
     })
     * */
