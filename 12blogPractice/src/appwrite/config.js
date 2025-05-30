import { Client, Databases, Query, Storage, ID } from "appwrite";
import conf from "../conf/conf";

class Config {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(conf.appwrtieBucketId);
  }

  // Appwrite Database services
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("AppwriteService :: getPost():: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("AppwriteService :: getPosts :: ", error);

      return false;
    }
  }

  async createPost(title, content, status, featuredImage, userId, slug) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, status, featuredImage, userId }
      );
    } catch (error) {
      console.error("Appwrite Service :: createPost() :: ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Appwirte Service :: deletePost() :: ", error);
    }
  }

  // Appwrite Storage Services

  async createFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwrtieBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Service :: createFile() :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return this.storage.deleteFile(conf.appwrtieBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service :: deleteFile() :: ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appwrtieBucketId, fileId).href;
  }
}

const config = new Config();
export default config;
