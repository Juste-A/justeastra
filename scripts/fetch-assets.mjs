// Downloads the site's images from the Framer CDN into /public, so the new site
// no longer depends on Framer. Run once with `npm run assets`, then commit public/.
// Files that already exist are skipped, so it's safe to run again (and it runs before every build).
import { mkdir, writeFile, access } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
const cdn = 'https://framerusercontent.com/images/'

// local path  ->  original Framer file (largest size Framer serves is used)
const assets = {
  'images/hero.webp': 'DGLEkYiZngaSYrdoPSslib2pw.webp?scale-down-to=1024',
  'images/about.webp': 'tKiuG0HMoTWkkWp9Bz5zWSROo.webp?scale-down-to=1024',
  'images/projects/titan-square-mile.webp': 'IouqBnWEvAuLlYTnkZZsSTjTlts.webp?scale-down-to=2048',
  'images/projects/titan-square-mile-2.png': 'Xau0T0rL0CeG69Pkue0629jkUI.png?scale-down-to=2048',
  'images/projects/titan-wealth.webp': 'QvbCRVsMyJ4qONRo4PTBHedlugw.webp?scale-down-to=2048',
  'images/projects/titan-wealth-2.png': '7fRJOhxgTDQZPLu0zd5ZlcSNRoY.png?scale-down-to=2048',
  'images/projects/guinness-ventures.png': 'c4avw5H3c8hrj1pN08M7dg3RHA.png?scale-down-to=2048',
  'images/projects/guinness-ventures-2.png': 'p9L387o4UeQUaL2OeckFewY1cvU.png',
  'images/projects/arctic-graphite.webp': 'KMMW2iPqqwb82hLcCjfstCDxoo.webp?scale-down-to=2048',
  'images/projects/arctic-graphite-2.webp': '1y94F2okDlUGffqmfPeBENI4E.webp?scale-down-to=2048',
  'images/projects/thincats.webp': 'VslRxUVxL0lKmNSkQmT2k2vd8.webp?scale-down-to=2048',
  'images/projects/thincats-2.webp': '5QIPGNJU2OgHFC4m8KqoOco248.webp?scale-down-to=2048',
  'images/projects/ptarmigan-media.png': 'rEbHNJ12vts545tI4Eqv0FpxLg.png?scale-down-to=2048',
  'images/projects/ptarmigan-media-2.png': 'a46OFf79R0ls0m6cODYWvxiimc.png?scale-down-to=2048',
  'favicon-light.svg': 'BaZUkTmBHFOLB2LOrepTCVCConk.svg',
  'favicon-dark.svg': 'WRcqIKrXpDNCboRj6fm1YGRmKo.svg',
  'apple-touch-icon.png': 'jtZX0MZ8hxdmGsy1ErNTDgayrt8.png',
  'images/og.png': 'https://framerusercontent.com/assets/PkRp3bbBdUgec7rdvXUBHwTYY0.png',
}

const exists = (p) => access(p).then(() => true, () => false)

let failed = 0
for (const [local, remote] of Object.entries(assets)) {
  const dest = join(root, local)
  if (await exists(dest)) continue
  const url = remote.startsWith('http') ? remote : cdn + remote
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    await mkdir(dirname(dest), { recursive: true })
    await writeFile(dest, Buffer.from(await res.arrayBuffer()))
    console.log('✓', local)
  } catch (e) {
    failed++
    console.warn('✗', local, '-', e.message)
  }
}
if (failed) console.warn(`\n${failed} image(s) could not be downloaded. Add them to public/ by hand.`)
else console.log('All images are in public/.')
