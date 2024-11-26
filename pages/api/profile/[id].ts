import type {NextApiRequest, NextApiResponse} from 'next';
import {Post} from '../../../models/postSchema';
import {User} from '../../../models/userSchema';
import {client} from '../../../utils/client';
import {
  singleUserQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
} from '../../../utils/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const {id} = req.query;

    const user = await User.findById(id);

    const userVideos = await Post.find({
      postedBy: {
        _id: user._id,
        userName: user.userName,
        image: user.image,
      },
    }).sort({createdAt: -1});

    const userLikedVideos = await Post.find({
      likes: {$elemMatch: {likedBy: {_id: id}}},
    }).sort({createdAt: -1});

    const data = {user, userVideos, userLikedVideos};

    res.status(200).json(data);
  }
}
