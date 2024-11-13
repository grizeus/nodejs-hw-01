import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  try {
    const parsedNumber = parseInt(number);
    if (Number.isNaN(parsedNumber) || parsedNumber < 1) {
      return;
    }
    const jsonData = await readContacts();
    let dataArray = JSON.parse(jsonData);

    if (!Array.isArray(dataArray)) {
      dataArray = [];
    }

    const newDataArray = Array(number).fill(createFakeContact());
    const updatedDataArray = [...dataArray, ...newDataArray];

    const updatedJson = JSON.stringify(updatedDataArray, null, 2);

    await writeContacts(updatedJson);
  } catch (e) {
    console.error(e.message);
  }
};

generateContacts(5);
