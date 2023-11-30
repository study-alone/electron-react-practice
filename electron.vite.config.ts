import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
		resolve: {
			alias: {
				'@resources': resolve('resources')
			}
		}
	},
	preload: {
		plugins: [externalizeDepsPlugin(), tsconfigPaths()]
	},
	renderer: {
		// resolve: {
		// 	alias: {
		// 		'@renderer': resolve('src/renderer/src')
		// 	}
		// },
		plugins: [react(), tsconfigPaths()]
	}
})
