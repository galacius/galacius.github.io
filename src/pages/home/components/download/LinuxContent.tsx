import { TabsContent } from "@galacius/design-system/atoms"
import type { FC } from "react"
import { CodeBlock } from "../CodeBlock"
import { DownloadButton } from "./DownloadButton"

export const LinuxContent: FC = () => {
  return (
    <TabsContent value="linux" className="space-y-4">
      <div>
        <h2 className="text-h2 mb-4">Ubuntu 24.04 (noble)</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-h3 mb-4">apt</h3>
            <div className="space-y-3">
              <CodeBlock
                code={`curl -fsSL https://galacius.github.io/galacius-apt/keys/galacius-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/galacius-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/galacius-archive-keyring.gpg] https://galacius.github.io/galacius-apt noble main" | sudo tee /etc/apt/sources.list.d/galacius.list\nsudo apt-get update && sudo apt-get install galacius`}
              />
              <p className="text-xs text-muted-foreground">
                Other Ubuntu releases (jammy/22.04, focal/20.04) just swap the codename (
                <code className="font-mono">noble</code>) in the second line.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-h3 mb-4">Manual</h3>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Run the install script.</p>
              <CodeBlock
                code={`curl -fsSL "https://raw.githubusercontent.com/galacius/galacius/main/scripts/install.sh" | bash`}
              />

              <p className="text-xs text-muted-foreground">
                Or click the button below to download the binary directly.
              </p>
              <DownloadButton
                asset="galacius-linux-amd64.tar.gz"
                label="Download for Linux (amd64)"
              />
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}
