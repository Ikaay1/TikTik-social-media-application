import type {NextApiRequest, NextApiResponse} from 'next';
import { uuid } from 'uuidv4';

import { Post } from '../../models/postSchema';
import { client } from '../../utils/client';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'PUT') {
        const {likedBy, postId, like} = req.body;
        console.log(like);

        const post = await Post.findById(postId);

        const data = like
            ? await Post.findByIdAndUpdate(
                  postId,
                  {
                      likes: [...post.likes, {likedBy}],
                  },
                  {new: true},
              )
            : await Post.findByIdAndUpdate(
                  postId,
                  {
                      likes: post.likes.filter(
                          (each: any) => each.likedBy._id !== likedBy._id,
                      ),
                  },
                  {new: true},
              );
        res.status(200).json(data);
    }
}
