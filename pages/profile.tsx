import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Profile } from '../src/components/page/Profile/Profile';
import { getMe } from '../src/lib/getMe';
import { User } from '../src/types/user';

const ProfilePage: NextPage = () => {
  const { data, status } = useSession();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (status === 'unauthenticated') {
      void signIn();
    } else if (!user && data) {
      getMe({ args: { token: data.apiToken as string } }).then((userData) => setUser(userData));
    }
  }, [status, user, data]);

  return <Profile user={user} />;
};

export default ProfilePage;
