import type {NextApiRequest, NextApiResponse} from 'next';

import { uuid } from 'uuidv4';

import { Post } from '../../../models/postSchema';
import { client } from '../../../utils/client';
import { postDetailQuery } from '../../../utils/queries';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const {id} = req.query;
        const data = await Post.findById(id);

        res.status(200).json(data);
    } else if (req.method === 'PUT') {
        const comment = req.body;

        const {id}: any = req.query;

        const post = await Post.findById(id);

        const data = await Post.findByIdAndUpdate(
            id,
            {
                comments: [...post.comments, comment],
            },
            {new: true},
        );

        res.status(200).json(data);
    }
}
