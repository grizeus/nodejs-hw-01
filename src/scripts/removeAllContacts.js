import { writeContacts } from "../utils/writeContacts";

export const removeAllContacts = async () => {
  try {
    await writeContacts(JSON.stringify([]));
  } catch (e) {
    console.error(e.message);
  }
};

removeAllContacts();
