import type { FC } from "react"
import pluginsHero1024 from "../../../assets/features/plugins/plugins-hero-1024.png"
import pluginsHero1024Avif from "../../../assets/features/plugins/plugins-hero-1024.avif"
import pluginsHero1536Avif from "../../../assets/features/plugins/plugins-hero-1536.avif"
import pluginsHero1024Webp from "../../../assets/features/plugins/plugins-hero-1024.webp"
import pluginsHero1536Webp from "../../../assets/features/plugins/plugins-hero-1536.webp"
import { ImageWithSkeleton } from "../../../components/media/ImageWithSkeleton"

export const PluginsPage: FC = () => {
  return (
    <section className="bg-background px-6 py-4 md:pt-16 md:pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-hero mb-4 font-heading text-success">Extend Galacius with plugins.</h1>
        <p className="text-lead mx-auto max-w-lg text-muted-foreground">
          Add new capabilities to Galacius without waiting on a core release — plugins run alongside
          the host app and plug straight into the same UI you already know.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-xl bg-muted shadow-xl transition-transform duration-300 hover:scale-105">
        <ImageWithSkeleton
          src={pluginsHero1024}
          alt="Galacius plugins"
          width={1024}
          height={642}
          className="block h-full w-full object-cover"
          sizes="(min-width: 1024px) 1024px, 100vw"
          sources={[
            {
              srcSet: `${pluginsHero1024Avif} 1024w, ${pluginsHero1536Avif} 1536w`,
              type: "image/avif",
            },
            {
              srcSet: `${pluginsHero1024Webp} 1024w, ${pluginsHero1536Webp} 1536w`,
              type: "image/webp",
            },
          ]}
        />
      </div>

      <p className="text-lead mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
        Official plugins are served from Galacius's official marketplace — but you're not locked
        into it. Point Galacius at your own custom marketplace to install and manage your own
        plugins.
      </p>
    </section>
  )
}
