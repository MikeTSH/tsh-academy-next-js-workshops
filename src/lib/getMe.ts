import { User } from '../types/user';

export const GetMeURL = `${process.env.NEXT_PUBLIC_API_URL}users/me`;

export const getMe = async ({ args }: { args: { token: string } }): Promise<User> => {
  return fetch(GetMeURL, { headers: { Authorization: `Bearer ${args.token}` } }).then((res) => res.json());
};
