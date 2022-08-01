import type {NextApiRequest, NextApiResponse} from 'next';

import { Post } from '../../../models/postSchema';
import { client } from '../../../utils/client';
import { topicPostsQuery } from '../../../utils/queries';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const {topic} = req.query;

        const videos = await Post.find({topic});

        res.status(200).json(videos);
    }
}
