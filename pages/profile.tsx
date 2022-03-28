import { GetServerSidePropsContext, NextPage } from 'next';
import { Profile, ProfileProps } from '../src/components/page/Profile/Profile';
import { getSession } from 'next-auth/react';
import { getMe } from '../src/lib/getMe';

const ProfilePage: NextPage<ProfileProps> = ({ user }) => {
  return <Profile user={user} />;
};

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${encodeURIComponent(req.url!)}`,
        permanent: false,
      },
    };
  }

  const user = await getMe({ args: { token: session.apiToken as string } });

  return {
    props: {
      user,
    },
  };
};

export default ProfilePage;
