import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {'process.env': process.env},
  css:{
    postcss:{
      plugins:[tailwindcss()]
    }
  },
  // server:{
  //   proxy:{
  //     "/api":"http://ec2-13-53-177-61.eu-north-1.compute.amazonaws.com/"
  //   }
  // }
})
