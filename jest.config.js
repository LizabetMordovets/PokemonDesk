module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
};