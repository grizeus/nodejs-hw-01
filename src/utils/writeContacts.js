import fs from "node:fs/promises";

import { PATH_DB } from "../constants/contacts.js";

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, updatedContacts, "utf-8");
  } catch (e) {
    console.error(e.message);
  }
};
