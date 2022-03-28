import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const ProfilePage: NextPage = () => {
  const { data, status } = useSession();

  return (
    <pre>
      {JSON.stringify(
        {
          status,
          data,
        },
        null,
        2,
      )}
    </pre>
  );
};

export default ProfilePage;
