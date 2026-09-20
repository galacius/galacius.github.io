import { createLazyFileRoute } from "@tanstack/react-router"
import { CoreFeaturesPage } from "../../pages/features/core/CoreFeaturesPage.tsx"

export const Route = createLazyFileRoute("/features/core")({
  component: CoreFeaturesPage,
})
