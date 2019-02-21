const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   
    role: { type: String, unique: true, required: true },
    
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Role', schema);

// const schema1 = new Schema({
   
//     name: { type: String, unique: true, required: true },
//     url: { type: String, required: true },
//     category: { type: String, required: true },

    
//     createdDate: { type: Date, default: Date.now }
// });

// schema.set('toJSON', { virtuals: true });

// module.exports = mongoose.model('menuItem', schema1);