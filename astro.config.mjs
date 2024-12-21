import { defineConfig } from "astro/config";
import fulldev from "fulldev-ui/integration";

export default defineConfig({
    integrations: [fulldev({
        css: "/src/css/custom.css",
        colors: {
            theme: "dark",
            dark: {
                background: "#111110",
                base: "#6F6D66",
                brand: "#F50",
            },
            light: {
                background: "#EEEEEC",
                base: "#6F6D66",
                brand: "#F50",
            },
        },
    })]
});