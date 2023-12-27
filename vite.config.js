import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
	base: './',
	resolve: {
		alias: {
		  'loggie': path.resolve(__dirname, './loggie/src')
		},
	  },
	plugins: [],
	server: { host: '0.0.0.0', port: 8000, open:'./public/index.html' },
	clearScreen: false	
})
