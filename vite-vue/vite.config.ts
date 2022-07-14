import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(({command, mode}: ConfigEnv): UserConfig => {
  const root = process.cwd();
  // 检测process.cwd()路径下的.env.development.local、.env.development、.env.local、.env这四个环境文件。
  // 输出NODE_ENV和VITE_开头的键值对，
  // VITE_开头的键值对后面的不会覆盖前面的，NODE_ENV的值后面的会覆盖前面的
  var env = loadEnv(mode, root);
  return {
    base: '',
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        { find: /\/@\//, replacement: pathResolve('src') + '/' },
      ]
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      proxy: {
        '/api': {
          target: "https://netease-cloud-music-api-alpha-fawn.vercel.app/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),
      styleImport({
        resolves: [VantResolve()],
      }),
    ] 
  };
})
