//@ts-nocheck
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", placeholder: "Enter Email" },
        password: { label: "Password", placeholder: "Enter Password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || credentials.password)
          return null;
        const user = users.find((item) => item.email === item.password);

        if (user?.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: "charmusxyz",

  callbacks: {
    async signIn({ user, account }: any) {
      console.log("User", user);
      console.log("Account", account);

      if (account.provider === "google") {
        const { name, email } = user;
        try {
          const res = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });

          if (res.ok) {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
