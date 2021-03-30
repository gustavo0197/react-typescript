module.exports = {
  moduleDirectories: [
    "node_modules",
    __dirname, // the root directory
    "src",
  ],
  moduleNameMapper: {
    "\\.(css|scss|sass|less|png|jpg|svg|jpeg)": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
