import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return await login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Appwrite Service :: getCurrentUser() :: ", error);
      return null;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      console.error("Appwrite Service :: logout() :: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
