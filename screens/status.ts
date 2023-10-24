export const status = (abbr: any) => {
  switch (abbr) {
    case "NE":
      return require("../assets/status/NE.png");

    case "LC":
      return require("../assets/status/LC.png");

    case "NT":
      return require("../assets/status/NT.png");

    case "VU":
      return require("../assets/status/VU.png");

    case "EN":
      return require("../assets/status/EN.png");

    case "CR":
      return require("../assets/status/CR.png");

    case "EW":
      return require("../assets/status/EW.png");

    case "EX":
      return require("../assets/status/EX.png");

    default:
      break;
  }
};
