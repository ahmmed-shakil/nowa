// [...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios"; // Import axios for API calls
import { base_url_admin, base_url_restaurant } from "@/shared/lib/requestUrl";
import { fetchUserProfile } from "@/shared/redux/actions/fetchProfileAction";
import { AdminPanelSettings } from "@mui/icons-material";

const API_URL_ADMIN = `${base_url_admin}`;
const API_URL_RESTAURANT = `${base_url_restaurant}`;

async function UserAdapter(credentials) {
  const { email, password, type } = credentials;
  console.log(credentials, "creds");

  try {
    if (type === "admin") {
      console.log("ADMIN");
      const response = await axios.post(`${API_URL_ADMIN}/login`, {
        email,
        password,
      });
      dispatch(
        fetchUserProfile({
          email: email,
          type: "admin",
        })
      );
      return response.data?.data;
    }
    if (type === "restaurant") {
      console.log("RESTAURANT");
      {
        const response = await axios.post(`${API_URL_RESTAURANT}/login`, {
          email,
          password,
        });
        return response.data?.data;
      }
    }
  } catch (error) {
    console.log(error);
    console.error("Error fetching user");
    return null;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: UserAdapter,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.id = account.providerAccountId;
        token.prm = user.userType;
        const currentTime = Math.floor(Date.now() / 1000);
        token.exp = currentTime + 3600;
        token.name = `${user.firstName} ${user?.lastName}`;
        token.picture = user?.userImageLink;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.expires = token.exp;
      session.type = token.prm;
      return session;
    },
  },
});
