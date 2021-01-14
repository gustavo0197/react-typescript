module.exports = {
  moduleDirectories: [
    "node_modules",
    __dirname, // the root directory
    "src",
  ],
  moduleNameMapper: {
    "\\.(css|scss|sass|less)": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
