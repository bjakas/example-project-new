const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"), // apsolutna putanja jer to zahtijeva webpack; koristimo node api path koji nam omogućuje da dobijemo apsolutni path u odnosu na fileove koje definiramo; __dirname konstanta je posebna konstanta od okruženja koja služi kao ishod za pronalaženje apsol. putanje do našeg build direktorija
  },
};