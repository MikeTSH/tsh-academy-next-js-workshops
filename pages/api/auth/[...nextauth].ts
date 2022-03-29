import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { postLogin } from '../../../src/lib/postLogin';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const loginResponse = await postLogin({
          username: credentials.username,
          password: credentials.password,
        });

        return {
          apiToken: loginResponse.token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.apiToken = user.apiToken;
      }

      return token;
    },
    async session({ session, token, user }) {
      session.apiToken = token.apiToken;
      return session;
    },
  },
});
