import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'GovBrDSReactComponents',
            formats: ['es', 'umd'],
            fileName: (format) => `govbr-ds-react-components.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                manualChunks: undefined,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
