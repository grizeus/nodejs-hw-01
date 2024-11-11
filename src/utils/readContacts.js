import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const readContacts = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    return buffer.toString("utf-8");
  } catch (e) {
    console.error(e.message);
  }
};
