const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'librarian'], default: 'user' },
    isDisabled: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);