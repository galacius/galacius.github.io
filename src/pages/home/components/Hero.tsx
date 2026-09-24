import type { FC } from "react"
import heroDemo1024Avif from "../../../assets/home/hero/hero-demo-1024.avif"
import heroDemo1024 from "../../../assets/home/hero/hero-demo-1024.png"
import heroDemo1024Webp from "../../../assets/home/hero/hero-demo-1024.webp"
import heroDemo640Avif from "../../../assets/home/hero/hero-demo-640.avif"
import heroDemo640Webp from "../../../assets/home/hero/hero-demo-640.webp"
import { GithubLicenseBadge } from "../../../components/badges/GithubLicenseBadge"
import { ProductHuntReleaseEmbedBadge } from "../../../components/badges/ProductHuntReleaseEmbedBadge"
import { UnikornReleaseBadge } from "../../../components/badges/UnikornReleaseBadge"
import { ImageWithSkeleton } from "../../../components/media/ImageWithSkeleton"
import { Section } from "./Section"

export const Hero: FC = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_3fr] md:gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-hero mb-4 font-heading text-success">
            A native desktop dashboard for Kubernetes.
          </h1>
          <p className="text-lead mb-6 max-w-lg text-muted-foreground">
            Galacius is a lightweight, native desktop app for managing Kubernetes clusters — a
            clean, modern, watch-based UI over your cluster, without the overhead of Electron.
          </p>

          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <GithubLicenseBadge />
              <UnikornReleaseBadge />
            </div>
            <ProductHuntReleaseEmbedBadge />
          </div>
        </div>

        {/* Right Column */}
        <div className="overflow-hidden rounded-lg bg-muted shadow-xl transition-transform duration-300 hover:scale-105">
          <ImageWithSkeleton
            src={heroDemo1024}
            alt="Galacius dashboard"
            width={1024}
            height={642}
            fetchPriority="high"
            className="block h-full w-full object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
            sources={[
              {
                srcSet: `${heroDemo640Avif} 640w, ${heroDemo1024Avif} 1024w`,
                type: "image/avif",
              },
              {
                srcSet: `${heroDemo640Webp} 640w, ${heroDemo1024Webp} 1024w`,
                type: "image/webp",
              },
            ]}
          />
        </div>
      </div>
    </Section>
  )
}
