import { GithubIcon } from "@galacius/design-system/atoms"
import type { FC } from "react"
import { useGetGithubLatestRelease } from "../../hooks/data-access/useGetGithubLatestRelease"
import { Badge } from "./Badge"

export const GithubReleaseBadge: FC = () => {
  const { data, isPending } = useGetGithubLatestRelease()

  return (
    <Badge
      href={import.meta.env.VITE_APP_GITHUB_URL}
      icon={<GithubIcon className="size-4" />}
      label="GITHUB"
      value={data?.tag_name}
      isPending={isPending}
      skeletonClassName="w-10"
    />
  )
}
