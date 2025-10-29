// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Note: using @vitejs/plugin-react-swc for speed

// https://vitejs.dev/config/
export default defineConfig({
  // 1. Plugins: Enables React support
  plugins: [react()],
  
  // 2. CSS Configuration (Essential for Tailwind)
  // This tells Vite/PostCSS where to find the configuration for Tailwind CSS and Autoprefixer.
  css: {
    postcss: {
      plugins: [
        // Autoprefixer is a PostCSS plugin that adds vendor prefixes to CSS rules 
        // (like -webkit-, -moz-) as needed.
        require('autoprefixer'),
        
        // Tailwind CSS processes utility classes defined in your code 
        // based on the configuration found in tailwind.config.js
        require('tailwindcss')('./tailwind.config.js'), 
      ],
    },
  },

  // 3. Base path (Optional, but good practice if deploying to a sub-folder)
  // base: '/sdrscms-app/',
});
