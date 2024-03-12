import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "474438178423-ht5ba48fp078he7kapa086m96oms226k.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
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
