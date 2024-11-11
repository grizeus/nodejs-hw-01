import { writeContacts } from "../utils/writeContacts";
import { readContacts } from "../utils/readContacts";

export const removeLastContact = async () => {
  try {
    const jsonData = await readContacts();
    let dataArray = JSON.parse(jsonData);

    if (!Array.isArray(dataArray)) {
      return;
    }

    if (dataArray.length === 0) {
      return;
    }

    dataArray.pop();
    const updatedJson = JSON.stringify(dataArray, null, 2);

    await writeContacts(updatedJson);
  } catch (e) {
    console.error(e.message);
  }
};

removeLastContact();
