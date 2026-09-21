import { cn } from "@galacius/design-system/utils"
import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"
import type { FC, ReactNode } from "react"

interface InformationCardProps {
  icon: ReactNode
  title: string
  description: string
  to?: string
  linkLabel?: string
}

export const InformationCard: FC<InformationCardProps> = ({
  icon,
  title,
  description,
  to,
  linkLabel,
}) => {
  const content = (
    <>
      <div className="mb-4 flex gap-4">
        {icon}
        <h3 className="text-h3 font-heading text-foreground">{title}</h3>
      </div>
      <p className={cn("text-body text-muted-foreground", { "mb-4": to })}>{description}</p>
      {to && linkLabel && (
        <span className="text-body inline-flex items-center gap-1 font-medium text-success">
          {linkLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        className="group block rounded-lg border border-border bg-muted p-6 transition-colors hover:border-success"
      >
        {content}
      </Link>
    )
  }

  return <div className="rounded-lg border border-border bg-muted p-6">{content}</div>
}
