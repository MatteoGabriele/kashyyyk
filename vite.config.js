import path from "node:path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "Kashyyyk",
      formats: ["es"],
      fileName: "kashyyyk",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    mockReset: true,
    coverage: {
      reporter: ["text", "html"],
    },
  },
});
