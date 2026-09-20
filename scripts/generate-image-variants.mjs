#!/usr/bin/env node

/**
 * Generate responsive image variants (AVIF, WebP, PNG) from master PNGs.
 *
 * Usage:
 *   node scripts/generate-image-variants.mjs
 *
 * Requires: sharp (add as devDependency: npm install --save-dev sharp)
 *
 * This script reads master PNG files and generates:
 * - AVIF (quality 50)
 * - WebP (quality 80)
 * - PNG (fallback)
 *
 * All variants preserve the 1.595 aspect ratio of the source images.
 */

import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promises as fs } from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, '..')

const images = [
  {
    input: 'src/assets/home/hero/hero-demo.png',
    widths: [640, 1024],
    baseName: 'hero-demo',
  },
  {
    input: 'src/assets/features/plugins/plugins-hero.png',
    widths: [1024, 1536],
    baseName: 'plugins-hero',
  },
]

const ASPECT_RATIO = 1.595 // width / height for both images

async function generateVariants() {
  console.log('Generating image variants...\n')

  for (const { input, widths, baseName } of images) {
    const inputPath = path.join(projectRoot, input)
    const outputDir = path.dirname(inputPath)

    console.log(`Processing ${input}...`)

    for (const width of widths) {
      const height = Math.round(width / ASPECT_RATIO)

      // AVIF
      const avifPath = path.join(outputDir, `${baseName}-${width}.avif`)
      await sharp(inputPath)
        .resize(width, height, { fit: 'cover' })
        .avif({ quality: 50 })
        .toFile(avifPath)
      const avifStat = await fs.stat(avifPath)
      console.log(`  ✓ ${baseName}-${width}.avif (${(avifStat.size / 1024).toFixed(1)}KB)`)

      // WebP
      const webpPath = path.join(outputDir, `${baseName}-${width}.webp`)
      await sharp(inputPath)
        .resize(width, height, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(webpPath)
      const webpStat = await fs.stat(webpPath)
      console.log(`  ✓ ${baseName}-${width}.webp (${(webpStat.size / 1024).toFixed(1)}KB)`)

      // PNG
      const pngPath = path.join(outputDir, `${baseName}-${width}.png`)
      await sharp(inputPath)
        .resize(width, height, { fit: 'cover' })
        .png()
        .toFile(pngPath)
      const pngStat = await fs.stat(pngPath)
      console.log(`  ✓ ${baseName}-${width}.png (${(pngStat.size / 1024).toFixed(1)}KB)`)
    }

    console.log()
  }

  console.log('Done! Generated image variants are ready for use.')
}

generateVariants().catch((err) => {
  console.error('Error generating image variants:', err.message)
  process.exit(1)
})
