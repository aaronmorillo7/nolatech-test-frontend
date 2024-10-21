/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#90AFC5",
        "secondary": "#336B87",
        "tertiary": "#2A3132",
        "autumn": "#763626",
        "disabled": "#505160",
      },
      textColor: {
        "primary": "#F1F1F2",
        "secondary": "#2A3132",
        "tertiary": "",
        "autumn": "#763626",
      },
    },
  },
  plugins: [],
};
