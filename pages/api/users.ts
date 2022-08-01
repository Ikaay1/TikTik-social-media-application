import type {NextApiRequest, NextApiResponse} from 'next';

import { User } from '../../models/userSchema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const data = await User.find({});

    if (data) {
        res.status(200).json(data);
    } else {
        res.json([]);
    }
}
