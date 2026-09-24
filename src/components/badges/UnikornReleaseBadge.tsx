import type { FC } from "react"
import unikornLogo from "../../assets/badges/unikorn-logo-white.png"
import { Badge } from "./Badge"

export const UnikornReleaseBadge: FC = () => (
  <Badge
    href={import.meta.env.VITE_APP_UNIKORN_URL}
    icon={<img src={unikornLogo} alt="" className="size-4" />}
    label="UNIKORN"
    trackingId="unikorn_release"
    value={undefined}
    isPending={false}
    skeletonClassName="w-10"
  />
)
