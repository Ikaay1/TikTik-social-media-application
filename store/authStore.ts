import axios from 'axios';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { BASE_URL } from '../utils';

const authStore = (set: any) => ({
    allUsers: [],

    fetchAllUsers: async () => {
        const response = await axios.get(`${BASE_URL}/api/users`);

        set({allUsers: response.data});
    },
});

const useAuthStore = create(
    persist(authStore, {
        name: 'auth',
    }),
);

export default useAuthStore;
