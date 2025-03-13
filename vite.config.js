import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const app = process.env.VITE_APP;

if (!app) {
    throw new Error("Please specify the app to build using VITE_APP.");
}

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Optional: Match CRA's default port
    },
    root: path.resolve(__dirname, app + "/"),
    base: "./",
});
