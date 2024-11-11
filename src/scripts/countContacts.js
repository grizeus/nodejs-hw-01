import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const jsonData = await readContacts();
    let dataArray = JSON.parse(jsonData);

    if (!Array.isArray(dataArray)) {
        return 0;
    }

    return dataArray.length;
};

console.log(await countContacts());
