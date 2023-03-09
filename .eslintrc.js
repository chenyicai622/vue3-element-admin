module.exports = {
	root: true,
	env: {
		// 指定代码运行环境
		browser: true, // 浏览器环境
		node: true, // node.js 环境
		es6: true // 支持 es6 语法
	},
	extends: [
		// 用于在 ESLint 配置文件中继承其他配置的属性
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'@vue/eslint-config-typescript',
		'prettier',
		'@vue/eslint-config-prettier',
		'plugin:prettier/recommended', // 基于包文件 eslint-plugin-prettier prettier
		'plugin:@typescript-eslint/recommended' // 基于包文件 @typescript-eslint/eslint-plugin
	],
	parser: 'vue-eslint-parser', // 指定如何解析语法
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
		jsxPragma: 'React', // 默认参数
		ecmaFeatures: {
			// 开始 jsx 语法
			jsx: true
		}
	},
	rules: {
		/* // eslint (http://eslint.cn/docs/rules)
		'no-var': 'error', // 要求使用 let 或 const 而不是 var
		'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
		'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
		'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		'no-irregular-whitespace': 'off', // 禁止不规则的空白
		'no-dupe-args': 'error', // 禁止 function 定义中出现重名参数
		'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换 !!!foo
		'no-extra-semi': 'error', // 禁用不必要的分号
		'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
		'no-multi-spaces': 'error', // 禁止出现多个空格
		'no-return-assign': 'error', // 禁止在返回语句中赋值
		'array-bracket-spacing': ['error', 'never'], // 禁止或强制在括号内使用空格  never(默认) 禁止在数组括号内出现空格
		'block-spacing': 'error', // 禁止或强制在代码块中开括号前和闭括号后有空格
		'brace-style': 'error', // 大括号风格要求  1tbs 默认
		'comma-dangle': ['error', 'never'], // 要求或禁止使用拖尾逗号 never(默认) 禁用拖尾逗号
		'comma-spacing': ['error', { 'before': false, 'after': true }], // 强制在逗号周围使用空格
		'indent': ['error', 2], // 强制使用一致的缩进
		'key-spacing': ['error', { 'afterColon': true }], // 强制在对象字面量的键和值之间使用一致的空格
		'no-trailing-spaces': 'error', // 禁用行尾空白
		'no-whitespace-before-property': 'error', // 禁止属性前有空白
		'object-curly-spacing': ['error', 'always'], // 强制在花括号中使用一致的空格
		'quotes': ['error', 'single'], // 强制使用一致的反勾号、双引号或单引号
		'semi': ['error', 'never'], // 要求或禁止使用分号代替
		'space-before-blocks': 'error', // 要求或禁止语句块之前的空格
		'space-in-parens': ['error', 'never'], // 禁止或强制圆括号内的空格
		'space-infix-ops': 'error', // 要求中缀操作符周围有空格
		'spaced-comment': ['error', 'always'], // 要求或禁止在注释前有空白
		'switch-colon-spacing': 'error', // 强制在 switch 的冒号左右有空格
		'max-len': ['error', { 'code': 80 }],

		// typeScript (https://typescript-eslint.io/rules)
		'@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
		'@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
		'@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
		'@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
		'@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
		'@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
		'@typescript-eslint/explicit-function-return-type': 'off', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
		'@typescript-eslint/no-var-requires': 'off', // 不允许在 import 语句中使用 require 语句
		'@typescript-eslint/no-empty-function': 'off', // 禁止空函数
		'@typescript-eslint/no-use-before-define': 'off', // 禁止在变量定义之前使用它们
		'@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
		'@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)
		'@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型

		// vue (https://eslint.vuejs.org/rules)
		'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效。
		'vue/v-slot-style': 'error', // 强制执行 v-slot 指令样式
		'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
		'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
		'vue/attributes-order': 'off', // vue api使用顺序，强制执行属性顺序
		'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
		'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
		'vue/max-attributes-per-line': 'off', // 强制每行的最大属性数
		'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
		'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
		'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
		'vue/require-default-prop': 'off', // 此规则要求为每个 prop 为必填时，必须提供默认值
		'vue/multi-word-component-names': 'off' // 要求组件名称始终为 “-” 链接的单词 */
	}
}
