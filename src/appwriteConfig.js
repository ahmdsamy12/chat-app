import { Account, Client, Databases } from "appwrite";

export const PROJECT_ID = "661d51b77d1f87d0ef48";
export const DATABASES_ID = "661d82cc86793de528b5";
export const COLLECTION_MESSAGES_ID = "661d82fc94ddec5b9d71";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
