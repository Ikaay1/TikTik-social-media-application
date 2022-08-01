import type {NextApiRequest, NextApiResponse} from 'next';
import dbConnect from '../../../lib/dbConnect';
import { Post } from '../../../models/postSchema';
import { client } from '../../../utils/client';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    await dbConnect();
    if (req.method === 'GET') {
        try {
            const posts = await Post.find({});
            res.status(200).json(posts);
        } catch (err: any) {
            res.status(500).json(err.message);
        }
    } else if (req.method === 'POST') {
        const doc = req.body;

        const newPost = new Post(doc);
        await newPost.save();
        res.status(200).json('video created');
    }
}
