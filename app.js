function saveSettings({ notifications, color: { theme } }) {
  console.log(color);
}

saveSettings({
  notifications: {
    follow: true,
    alert: true,
    mkt: false,
  },
  color: {
    theme: "blue",
  },
});
