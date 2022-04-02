import { defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import * as fs from 'fs';
// https://vitejs.dev/config/

let key:Buffer = fs.readFileSync('key.pem');
let cert:Buffer = fs.readFileSync('cert.pem');

export default defineConfig({
  
  plugins: [react()],

  https: {
    key: key,
    cert:cert
  }
})
