const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Could not connect to MongoDB:', err);
        throw new Error(`Could not connect to MongoDB: ${err}`);
    }
};

module.exports = connectDB;
