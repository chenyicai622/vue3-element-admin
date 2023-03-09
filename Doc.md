####项目创建流程
```js
vscode vetur关闭 volar打开

npm create vite@latest

npm i

npm i @types/node -D // 解决 vite.config.ts 引入 path 报错

npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue // 配置 eslint prettier
@typescript-eslint/eslint-plugin @typescript-eslint/parser -D

// 创建 eslint 配置
touch .eslintrc.js
touch .eslintignore

// 创建 prettier 配置
touch .prettierrc.js
touch .prettierignore

// 修改 tsconfig
update tsconfig.json

// 安装 pinia 
npm i pinia -S
// pinia数据持久化  pinia-plugin-persistedstate 
npm i pinia-plugin-persistedstate -S
// 创建 store 文件夹
touch src/store

// 安装 vue-router@4
npm i vue-router -S
// 创建 router 文件夹
touch src/router

// 安装 sass sass-loader
npm i sass sass-loader -D
// vite.config.ts 添加 scss 配置
css: {
	preprocessorOptions: {
		scss: {
			additionalData: '@import "@/src/styles/index.scss";' // 添加公共样式
		}
	}
}

// 安装 element-plus
npm i element-plus -S
// main.ts 修改
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
```

- vscode配置
```js
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
}
```