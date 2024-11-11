import { createFakeContact } from "../utils/createFakeContact";
import { readContacts } from "../utils/readContacts";
import { writeContacts } from "../utils/writeContacts";

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

    for (let i = 0; i < number; i++) {
      dataArray.push(createFakeContact());
    }

    const updatedJson = JSON.stringify(dataArray, null, 2);

    await writeContacts(updatedJson);
  } catch (e) {
    console.error(e.message);
  }
};

generateContacts(5);
