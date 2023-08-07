import { defineConfig, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 引入mock
import { viteMockServe } from 'vite-plugin-mock'
// 引入
import { visualizer } from 'rollup-plugin-visualizer'
// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // default
        mockPath: './src/mock',
        localEnabled: command === 'serve',
      }),
      visualizer({
        open: true, // 注意这里要设置为true，否则无效
        gzipSize: true, // 分析图生成的文件名
        brotliSize: true, // 收集 brotli 大小并将其显示
        filename: 'bundle.html', // 分析图生成的文件名
      }), // 打包分析
    ],
    resolve: {
      alias: {
        '@': path.resolve('src'),
        '@c': path.resolve('src/components'),
      },
    },
    server: {
      proxy: {
        '/dev-api': {
          target: 'http://127.0.0.1:5173',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        },
      },
    },
    // scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variable.scss";',
        },
      },
    },
  }
})
