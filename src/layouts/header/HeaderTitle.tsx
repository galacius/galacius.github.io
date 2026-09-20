import { cn } from "@galacius/design-system/utils"
import { Link } from "@tanstack/react-router"
import type { ComponentProps, FC } from "react"
import logo from "../../assets/logo-transparent.png"

type HeaderTitleProps = Omit<ComponentProps<typeof Link>, "to">

export const HeaderTitle: FC<HeaderTitleProps> = ({ className, ref, ...props }) => (
  <Link ref={ref} to="/" className={cn("flex items-center gap-4", className)} {...props}>
    <img
      src={logo}
      alt="Galacius"
      width={32}
      height={32}
      fetchPriority="low"
      className="h-8 w-auto"
    />
    <span className="text-h1 font-heading text-foreground">Galacius</span>
  </Link>
)
