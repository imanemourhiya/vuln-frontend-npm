// Bundle src/index.js -> dist/bundle.js, puis copie index.html dans dist/
const esbuild = require('esbuild');
const fs = require('fs');

fs.mkdirSync('dist', { recursive: true });
esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/bundle.js',
    minify: true,
    sourcemap: false,
    logLevel: 'info',
  })
  .then(() => {
    fs.copyFileSync('src/index.html', 'dist/index.html');
    console.log('Build OK -> dist/');
  })
  .catch(() => process.exit(1));
