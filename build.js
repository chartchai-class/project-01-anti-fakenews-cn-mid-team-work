#!/usr/bin/env node
import { build } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
  await build({
    root: __dirname,
    configFile: resolve(__dirname, 'vite.config.js'),
  });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

