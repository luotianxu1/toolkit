import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueDevTools from "vite-plugin-vue-devtools"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { createStyleImportPlugin, VantResolve } from "vite-plugin-style-import"
import { VantResolver } from "@vant/auto-import-resolver"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
		AutoImport({
			resolvers: [VantResolver()],
			imports: ["vue", "vue-router", "pinia"],
			dts: "src/types/auto-imports.d.ts",
			eslintrc: {
				enabled: true, // Default `false`
				filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			}
		}),
		Components({
			resolvers: [VantResolver()],
			dts: "src/types/components.d.ts"
		}),
		// 自动引入element-plus样式
		createStyleImportPlugin({
			resolves: [VantResolve()],
			libs: [
				{
					libraryName: "vant",
					esModule: true,
					resolveStyle: name => `vant/es/${name}/style/index`
				}
			]
		})
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	}
})
