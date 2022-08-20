const components = {
  Home: { name: "home_page", path: "components_by_page/home_page/components" },
  CertificatesCatalog: {
    name: "certificate_catalog_page",
    path: "components_by_page/certificate_catalog_page/components",
  },
  CertificateLearn: {
    name: "certificate_learn_page",
    path: "components_by_page/certificate_learn_page/components",
  },
  ExerciseCatalog: {
    name: "exercise_catalog_page",
    path: "components_by_page/exercise_catalog_page/components",
  },
  ExerciseLearn: {
    name: "exercise_learn_page",
    path: "components_by_page/exercise_learn_page/components",
  },
  User: { name: "user_page", path: "components_by_page/user_page/components" },
};

const sections = {
  Home: { name: "home_page", path: "components_by_page/home_page/sections" },
  CertificatesCatalog: {
    name: "certificate_catalog_page",
    path: "components_by_page/certificate_catalog_page/sections",
  },
  CertificateLearn: {
    name: "certificate_learn_page",
    path: "components_by_page/certificate_learn_page/sections",
  },
  ExerciseCatalog: {
    name: "exercise_catalog_page",
    path: "components_by_page/exercise_catalog_page/sections",
  },
  ExerciseLearn: {
    name: "exercise_learn_page",
    path: "components_by_page/exercise_learn_page/sections",
  },
  User: { name: "user_page", path: "components_by_page/user_page/sections" },
};

module.exports = {
  helpers: {
    getComponentPath: (component = "Home") => {
      return components[component].path;
    },
    getComponent: (component = "Home") => {
      return components[component].name;
    },
    getSectionPath: (section = "Home") => {
      return sections[section].path;
    },
    getSection: (section = "Home") => {
      return sections[section].name;
    },
    toUpper: (st) => {
      return st.charAt(0).toUpperCase() + st.slice(1).toLowerCase();
    },
  },
};
