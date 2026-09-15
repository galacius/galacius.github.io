import type { FC } from "react"
import { cn } from "@galacius/design-system/utils"

export const Skeleton: FC<{ className?: string }> = ({ className }) => (
  <div className={cn("animate-pulse bg-muted", className)} />
)
