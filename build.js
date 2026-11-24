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
const itemsToCopy = ['index.html', 'htb-arena.html', 'manifest.json', 'css', 'js', 'assets', 'api'];

const configData = JSON.stringify({
  SUPABASE_URL: process.env.SUPABASE_URL || 'https://bvrpxoqpfwhlogmqiykw.supabase.co',
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || 'sb_publishable_3soZqoVbex6Eb5yum7ic9Q_Q9fV9C2l',
  SUPABASE_PROJECT_REF: process.env.SUPABASE_PROJECT_REF || 'bvrpxoqpfwhlogmqiykw',
  TEACHER_CODE: process.env.TEACHER_CODE || 'GURU2026'
}, null, 2);

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

  // Sediakan fallback statis untuk endpoint /api/config
  const apiDir = path.join(target, 'api');
  fs.mkdirSync(apiDir, { recursive: true });
  fs.writeFileSync(path.join(apiDir, 'config'), configData, 'utf-8');
  fs.writeFileSync(path.join(apiDir, 'config.json'), configData, 'utf-8');

  console.log(`Successfully populated ${target}/ with static api/config fallback`);
}
