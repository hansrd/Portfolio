import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#0e0f12", panel: "#16171c", line: "#2a2c34", accent: "#9db0ff" } } },
  plugins: [],
};
export default config;
