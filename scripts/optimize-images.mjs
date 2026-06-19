// One-off image optimizer: converts the heavy source PNGs in src/assets to WebP.
// Run with: npm run optimize:img
//
// - cat_*.png  (poster collages, text legibility matters): quality 82, keep size
// - venue*.png (photos): quality 78, cap width to 780px (2x of ~360px display)
//
// Originals are kept; the .webp files are committed and imported by src/data.js.
import { readdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const ASSETS = fileURLToPath(new URL('../src/assets', import.meta.url))

const rules = [
  { match: /^cat_.*\.png$/i, quality: 82, maxWidth: null },
  { match: /^venue\d+\.png$/i, quality: 78, maxWidth: 780 },
]

const kb = (n) => `${Math.round(n / 1024)} KB`

const files = (await readdir(ASSETS)).filter((f) => /\.png$/i.test(f))
let before = 0
let after = 0

for (const file of files) {
  const rule = rules.find((r) => r.match.test(file))
  if (!rule) continue

  const src = path.join(ASSETS, file)
  const out = path.join(ASSETS, file.replace(/\.png$/i, '.webp'))

  const srcSize = (await stat(src)).size
  let img = sharp(src)
  if (rule.maxWidth) {
    const meta = await img.metadata()
    if (meta.width && meta.width > rule.maxWidth) {
      img = img.resize({ width: rule.maxWidth, withoutEnlargement: true })
    }
  }
  await img.webp({ quality: rule.quality }).toFile(out)

  const outSize = (await stat(out)).size
  before += srcSize
  after += outSize
  const pct = Math.round((1 - outSize / srcSize) * 100)
  console.log(`${file.padEnd(24)} ${kb(srcSize).padStart(8)} → ${kb(outSize).padStart(8)}  (-${pct}%)`)
}

console.log('-'.repeat(54))
console.log(`${'TOTAL'.padEnd(24)} ${kb(before).padStart(8)} → ${kb(after).padStart(8)}  (-${Math.round((1 - after / before) * 100)}%)`)
