const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
})

const blockSchema = new Schema({
  colorRed: {
    type: Number,
    min: 0,
    max: 255,
    default: 0
  },
  colorGreen: {
    type: Number,
    min: 0,
    max: 255,
    default: 0
  },
  colorBlue: {
    type: Number,
    min: 0,
    max: 255,
    default: 0
  },
  colorText: {
    type: String,
    enum: ['white', 'black'],
    default: 'white'
  },  
  imageLink: {
    type: String,
    required: false
  },
  messages: [messageSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Block', blockSchema);
