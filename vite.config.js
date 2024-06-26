import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		VitePWA({
			// add this to cache all the imports
			workbox: {
				globPatterns: ["**/*"],
			},
			// add this to cache all the
			// static assets in the public folder
			includeAssets: ["**/*"],
			registerType: "autoUpdate",
			manifest: {
				name: "Koohii Instant Search",
				short_name: "Koohii Search",
				description: "My Awesome App description",
				theme_color: "#4D290F",
				icons: [
					{
						src: "android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
			injectManifest: {
				globPatterns: ["**/*.{svg}"],
			},
		}),
	],
});
