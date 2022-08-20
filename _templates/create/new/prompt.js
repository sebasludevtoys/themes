module.exports = [
  {
    type: "select",
    name: "type",
    message: "What do you want to create",
    limit: 2,
    choices: [
      { name: "Component", value: "component" },
      { name: "Section", value: "section" },
    ],
  },
  {
    type: "select",
    name: "type_location",
    message: "Where do you want to create",
    limit: 4,
    choices: [
      { name: "Catalog" },
      { name: "User" },
      { name: "Certificate" },
      { name: "Home" },
    ],
  },
  {
    type: "input",
    name: "type_name",
    message: `Enter name:`,
  },
];
