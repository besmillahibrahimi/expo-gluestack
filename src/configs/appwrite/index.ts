import {
    Account,
    Avatars,
    Client,
    Databases,
    Functions,
    Storage,
} from "react-native-appwrite";
import { Env } from "../env";

const client = new Client()
  .setEndpoint(Env.appwrite.endpoint)
  .setProject(Env.appwrite.project)
  .setPlatform(Env.appwrite.platform);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const avatars = new Avatars(client);
