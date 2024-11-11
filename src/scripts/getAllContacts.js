import { readContacts } from "../utils/readContacts";

export const getAllContacts = async () => {
  try {
    const res = await readContacts();
    return res;
  } catch (e) {
    console.error(e.message);
  }
};

console.log(await getAllContacts());
