import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'public/js', // Adjust this to match your desired output directory
        rollupOptions: {
        input: 'src/js/app.js',
        },
    },
});