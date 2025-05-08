module.exports = (api) => {
  api.cache(true);

  process.env.EXPO_ROUTER_APP_ROOT = "src/app"; // 👈 tells expo-router where to find routes

  return {
    presets: ["babel-preset-expo"], // includes @babel/preset-react
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: { "@": "./src" },
        },
      ],
    ],
  };
};
