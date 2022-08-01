import type {NextApiRequest, NextApiResponse} from 'next';
import { Post } from '../../../models/postSchema';
import { client } from '../../../utils/client';
import { searchPostsQuery } from '../../../utils/queries';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const {id} = req.query;
        const search = typeof id === 'string' ? id : '';
        if (search) {
            const caption = new RegExp(search, 'i');

            const videos = await Post.find({caption});

            res.status(200).json(videos);
        }
    }
}
