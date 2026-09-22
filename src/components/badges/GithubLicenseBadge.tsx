import type { FC } from "react"
import { useGetGithubLicense } from "../../hooks/data-access/useGetGithubLicense"
import { Badge } from "./Badge"

export const GithubLicenseBadge: FC = () => {
  const { data, isPending } = useGetGithubLicense()

  return (
    <Badge
      href={`${import.meta.env.VITE_APP_GITHUB_URL}/blob/master/LICENSE`}
      label="LICENSE"
      value={data?.license?.spdx_id}
      isPending={isPending}
      skeletonClassName="w-14"
    />
  )
}
