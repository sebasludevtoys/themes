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
    limit: 6,
    choices: [
      { name: "ExerciseCatalog" },
      { name: "ExerciseLearn" },
      { name: "CertificateLearn" },
      { name: "CertificatesCatalog" },
      { name: "Home" },
      { name: "User" },
    ],
  },
  {
    type: "input",
    name: "type_name",
    message: `Enter name:`,
  },
];
