module.exports = {
  //roots: ["src/"],
  moduleDirectories: [
    "node_modules",
    // add the directory with the test-utils.js file, for example:
    //"utils", // a utility folder
    __dirname, // the root directory
    "src",
  ],
  // ... other options ...
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
