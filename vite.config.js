import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import inject from "@rollup/plugin-inject";

export default defineConfig({
    plugins: [
        inject({
            // => that should be first under plugins array
            $: "jquery",
            jQuery: "jquery",
        }),
        react(), // React plugin that we installed for vite.js
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
