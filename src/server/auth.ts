import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "~/env.mjs";
import clientPromise from "~/lib/MongoDb";


declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      image: string;
      name: string;
      // ...other properties
      // role: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),

  ],
  pages: {
    signIn: '/auth/signin',
  }
};


export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
