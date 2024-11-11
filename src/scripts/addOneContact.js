import { createFakeContact } from "../utils/createFakeContact";
import { readContacts } from "../utils/readContacts";
import { writeContacts } from "../utils/writeContacts";

export const addOneContact = async () => {
  try {
    const jsonData = await readContacts();
    let dataArray = JSON.parse(jsonData);

    if (!Array.isArray(dataArray)) {
      dataArray = [];
    }

    // add exactly one fake contact
    dataArray.push(createFakeContact());

    const updatedJson = JSON.stringify(dataArray, null, 2);

    await writeContacts(updatedJson);
  } catch (e) {
    console.error(e.message);
  }
};

addOneContact();
