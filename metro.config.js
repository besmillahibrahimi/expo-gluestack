const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add polyfills for Node.js core modules
config.resolver.extraNodeModules = {
  stream: require.resolve("readable-stream"),
  crypto: require.resolve("react-native-crypto"),
  buffer: require.resolve("buffer/"),
  util: require.resolve("util/"),
  assert: require.resolve("assert/"),
  fs: false,
  path: require.resolve("path-browserify"),
  zlib: false,
  http: require.resolve("@tradle/react-native-http"),
  https: false,
  os: require.resolve("os-browserify/browser.js"),
  url: require.resolve("url/"),
  net: false,
  tls: false,
  child_process: false,
  dns: false,
  dgram: false,
};

module.exports = config;
