import { GithubIcon } from "@galacius/design-system/atoms"
import type { FC } from "react"
import { useGetGithubLatestRelease } from "../../hooks/data-access/useGetGithubLatestRelease"
import { Badge } from "./Badge"

export const PluginMarketplaceReleaseBadge: FC = () => {
  const { data, isPending } = useGetGithubLatestRelease(
    import.meta.env.VITE_APP_PLUGINS_RELEASE_API_URL
  )

  return (
    <Badge
      href={import.meta.env.VITE_APP_PLUGINS_GITHUB_URL}
      icon={<GithubIcon className="size-4" />}
      label="PLUGINS MARKETPLACE"
      value={data?.tag_name}
      isPending={isPending}
      skeletonClassName="w-10"
    />
  )
}
