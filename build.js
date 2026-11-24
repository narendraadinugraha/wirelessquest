import fs from 'fs';
import path from 'path';

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const targets = ['public', 'dist'];
const itemsToCopy = ['index.html', 'htb-arena.html', 'manifest.json', 'css', 'js', 'assets'];

for (const target of targets) {
  fs.mkdirSync(target, { recursive: true });
  for (const item of itemsToCopy) {
    if (fs.existsSync(item)) {
      const stat = fs.statSync(item);
      if (stat.isDirectory()) {
        copyDirSync(item, path.join(target, item));
      } else {
        fs.copyFileSync(item, path.join(target, item));
      }
    }
  }
  console.log(`Successfully populated ${target}/`);
}
