import axios from "axios";
import { base_url_admin } from "./requestUrl";

const fetchUserByEmail = async () => {
  try {
    const profile = await axios.get(`${base_url_admin}/user-profile`);
    return profile.data.data; // Assuming you want to return the user profile data
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it further up the call stack if needed
  }
};

export async function getUser(session) {
  try {
    // Fetch user data from your database based on email
    if (session) {
      const user = await fetchUserByEmail();
      return user;
    }
    return null;
  } catch (error) {
    return null;
  }
}
