import { createLazyFileRoute } from "@tanstack/react-router"
import { PluginsPage } from "../../pages/features/plugins/PluginsPage.tsx"

export const Route = createLazyFileRoute("/features/plugins")({
  component: PluginsPage,
})
