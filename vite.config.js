import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import path from "path";
import glob from "glob";

export default defineConfig({
    plugins: [viteSingleFile(), ViteMinifyPlugin({})],
    root: path.resolve(__dirname, "src"),
    build: {
        //ssr: true,
        outDir: path.resolve(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src", "index.html"),
                signup_1: path.resolve(__dirname, "src", "signup_1.html")
            },
            //input: glob.sync(path.resolve(__dirname, "src", "*.html"))
            output: {
                inlineDynamicImports: false
            }
        }
    }
})