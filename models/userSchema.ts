import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        image: {type: String, required: true},
        sub: {type: String, required: true},
        userName: {type: String, required: true},
    },
    {timestamps: true},
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
