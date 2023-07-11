import type { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { users } from '@/data/users';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        '1010537517125-9vjbujjktse5ko3il7elalfjv2ivas6k.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find(
          user => user.email === credentials.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
