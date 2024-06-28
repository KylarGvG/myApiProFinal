const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kylargvg:EnVGCjjYEQwz2dWa@devcamp.ummqobr.mongodb.net/?retryWrites=true&w=majority&appName=devcamp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose;