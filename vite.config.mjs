import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 모든 IP 주소에서 접근 가능하게 설정
    port: 5174, // 사용할 포트
    strictPort: true // 설정한 포트가 사용 중일 경우 실패하도록 설정
  }
})
