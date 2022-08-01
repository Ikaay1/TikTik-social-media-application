import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        video: {
            type: {
                asset: {
                    url: String,
                },
            },
            required: true,
        },
        caption: {type: String, required: true},
        postedBy: {
            type: {
                _id: String,
                userName: String,
                image: String,
            },
        },
        likes: {
            type: [
                {
                    likedBy: {
                        _id: String,
                    },
                },
            ],
        },
        comments: {
            type: [
                {
                    comment: String,
                    postedBy: {
                        _id: String,
                    },
                },
            ],
        },
        userId: {type: String, required: true},
        topic: {type: String, required: true},
    },
    {timestamps: true},
);

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
