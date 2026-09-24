import type { FC } from "react"
import { trackEvent } from "../../lib/gtag"

export const ProductHuntReleaseEmbedBadge: FC = () => {
  const href = import.meta.env.VITE_APP_PRODUCT_HUNT_URL

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-transform duration-300 hover:scale-105"
      onClick={() => trackEvent("badge_click", { badge: "product_hunt_release", href })}
    >
      <img
        alt="Galacius - A native desktop dashboard for Kubernetes | Product Hunt"
        width={250}
        height={54}
        src={import.meta.env.VITE_APP_PRODUCT_HUNT_EMBED_IMAGE_URL}
      />
    </a>
  )
}
