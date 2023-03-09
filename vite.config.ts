import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir: string) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve('src')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/src/styles/index.scss";' // 添加公共样式
			}
		}
	}
})
