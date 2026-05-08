import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub project pages: https://<user>.github.io/<repo>/
const repoName = 'A-S_LawFirm.io'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? `/${repoName}/` : '/',
  plugins: [react(), tailwindcss()],
})
