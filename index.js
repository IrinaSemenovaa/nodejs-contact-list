const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const { program } = require("commander");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const argv = program.opts();

async function manageContacts({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.log("All Contacts:", allContacts);
      break;
    case "get":
      const fetchedContact = await getContactById(id);
      console.log("Fetched Contact:", fetchedContact);
      break;
    case "remove":
      const removedContact = await removeContact(id);
      console.log("Removed Contact:", removedContact);
      break;
    case "add":
      const newContact = await addContact(name, email, phone);
      console.log("New Contact:", newContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

manageContacts(argv);
