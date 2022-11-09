const settings = {
  color: {
    theme: "dark",
  },
};

const {
  color: { theme = "light" },
} = settings;

console.log(theme);
