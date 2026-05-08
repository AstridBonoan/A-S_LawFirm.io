import { spawnSync } from 'node:child_process'
import process from 'node:process'

process.env.GITHUB_PAGES = 'true'

function run(cmd, args) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', shell: false })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

run('node', ['./node_modules/typescript/lib/tsc.js', '-b'])
run('node', ['./node_modules/vite/bin/vite.js', 'build'])
