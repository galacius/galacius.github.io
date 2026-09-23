import { Button } from "@galacius/design-system/atoms"
import type { FC, ReactNode } from "react"
import { trackEvent } from "../../lib/gtag"

type BadgeProps = {
  href: string
  icon?: ReactNode
  label: ReactNode
  trackingId: string
  value: string | undefined
  isPending: boolean
  skeletonClassName: string
}

export const Badge: FC<BadgeProps> = ({
  href,
  icon,
  label,
  trackingId,
  value,
  isPending,
  skeletonClassName,
}) => (
  <Button
    size="sm"
    nativeButton={false}
    className="h-8 gap-0 overflow-hidden rounded-lg p-0 hover:brightness-95"
    render={
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("badge_click", { badge: trackingId, href })}
      />
    }
  >
    <span className="flex h-full items-center gap-1.5 bg-foreground px-3 text-background">
      {icon}
      {label}
    </span>
    {isPending ? (
      <span className="flex h-full items-center bg-success/85 px-3">
        <span className={`h-3 animate-pulse rounded-full bg-white/50 ${skeletonClassName}`} />
      </span>
    ) : (
      value && (
        <span className="flex h-full items-center bg-success/85 px-3 font-mono text-white">
          {value}
        </span>
      )
    )}
  </Button>
)
