import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Optional: Match CRA's default port
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'components')
        }
    },
    build: {
        rollupOptions: {
            input: {
                "ux-research": 'ux-research/index.html',
                "ux-metrics": 'ux-metrics/index.html',
            },
            output: [
                {
                    name: "ux-research",
                    dir: "dist-ux-research",
                },
                {
                    name: "ux-metrics",
                    dir: "dist-ux-metrics",
                },
            ],
        },
    },
});
