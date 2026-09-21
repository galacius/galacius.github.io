import type { FC } from "react"
import { DownloadIcon } from "@galacius/design-system/atoms"
import { Key, Zap } from "lucide-react"
import { InformationCard } from "../../../components/InformationCard"
import { Section } from "./Section"

export const Prerequisite: FC = () => {
  return (
    <Section id="prerequisite">
      <div className="space-y-8">
        <div>
          <h2 className="text-hero mb-2 font-heading text-foreground">Prerequisite</h2>
          <p className="text-lead text-muted-foreground">
            No setup needed - Galacius is ready to go with zero configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <InformationCard
            icon={<Zap className="size-6 text-success" />}
            title="Zero dependencies"
            description="Single binary with everything included—no runtimes or libraries to install."
          />

          <InformationCard
            icon={<DownloadIcon className="size-6 text-success" />}
            title="Single file, ~50 MB"
            description="Download once, run anywhere. A self-contained desktop app, no installation wizard."
          />

          <InformationCard
            icon={<Key className="size-6 text-success" />}
            title="Uses your kubeconfig"
            description="Connects directly to clusters you already use—reads from ~/.kube/config."
          />
        </div>
      </div>
    </Section>
  )
}
