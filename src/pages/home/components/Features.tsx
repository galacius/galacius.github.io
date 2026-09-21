import type { FC } from "react"
import { LayoutGrid, Puzzle } from "lucide-react"
import { InformationCard } from "../../../components/InformationCard"
import { Section } from "./Section"

export const Features: FC = () => {
  return (
    <Section id="features">
      <div className="space-y-8">
        <div>
          <h2 className="text-hero mb-2 font-heading text-foreground">Features</h2>
          <p className="text-lead text-muted-foreground">
            Everything you need to work with Kubernetes clusters day to day, and a plugin system to
            grow beyond it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InformationCard
            icon={<LayoutGrid className="size-6 text-success" />}
            title="Core Features"
            description="Browse every workload in a live, watch-based view, stream pod logs and exec into a terminal, port-forward with one click, and filter across namespaces — all from the Galacius desktop app."
            to="/features/core"
            linkLabel="Explore core features"
          />

          <InformationCard
            icon={<Puzzle className="size-6 text-success" />}
            title="Plugins"
            description="Add new capabilities to Galacius without waiting on a core release. Install plugins from the official marketplace, or point Galacius at your own custom marketplace."
            to="/features/plugins"
            linkLabel="Explore plugins"
          />
        </div>
      </div>
    </Section>
  )
}
