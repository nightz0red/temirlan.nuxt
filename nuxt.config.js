"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://nuxt.com/docs/api/configuration/nuxt-config
exports.default = defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/tailwindcss']
});
