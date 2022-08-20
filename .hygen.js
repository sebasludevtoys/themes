const components = {
  Catalog: {
    name: "catalog_page",
    path: "components_by_page/catalog_page/components",
  },
  Certificate: {
    name: "certificate_page",
    path: "components_by_page/certificate_page/components",
  },
  User: { name: "user_page", path: "components_by_page/user_page/components" },
  Home: { name: "home_page", path: "components_by_page/home_page/components" },
};

const sections = {
  Catalog: {
    name: "catalog_page",
    path: "components_by_page/catalog_page/sections",
  },
  Certificate: {
    name: "certificate_page",
    path: "components_by_page/certificate_page/sections",
  },
  User: { name: "user_page", path: "components_by_page/user_page/sections" },
  Home: { name: "home_page", path: "components_by_page/home_page/sections" },
};

module.exports = {
  helpers: {
    getComponentPath: (component = "Catalog") => {
      return components[component].path;
    },
    getComponent: (component = "Catalog") => {
      return components[component].name;
    },
    getSectionPath: (section = "Catalog") => {
      return sections[section].path;
    },
    getSection: (section = "Catalog") => {
      return sections[section].name;
    },
  },
};
