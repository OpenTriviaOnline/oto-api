module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/__tests__"],
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).+(ts)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
