import type {NextApiRequest, NextApiResponse} from 'next';
import dbConnect from '../../lib/dbConnect';
import { User } from '../../models/userSchema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    await dbConnect();
    if (req.method === 'GET') {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (err: any) {
            res.status(500).json(err.message);
        }
    }

    if (req.method === 'POST') {
        const user = req.body;

        const checkUser = await User.findOne({sub: user.sub});
        if (checkUser?.sub) return res.status(200).json(checkUser);

        const newUser = new User(user);
        const newOne = await newUser.save();
        res.status(200).json(newOne);
    }
}
