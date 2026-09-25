import { TabsContent } from "@galacius/design-system/atoms"
import type { FC } from "react"
import { CodeBlock } from "../CodeBlock"
import { DownloadButton } from "./DownloadButton"

export const WindowsContent: FC = () => {
  return (
    <TabsContent value="windows" className="space-y-4">
      <div>
        <h2 className="text-h2 mb-4">Manual</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-h3 mb-4">PowerShell</h3>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                Run from Windows PowerShell or PowerShell 7+.
              </p>
              <CodeBlock
                code={`irm https://raw.githubusercontent.com/galacius/galacius/master/scripts/install.ps1 | iex`}
                section="windows_powershell"
              />
              <p className="text-xs text-muted-foreground">
                Installs to <code className="font-mono">%LOCALAPPDATA%\Programs\Galacius</code>,
                adds it to your user PATH, and creates a Start Menu shortcut.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-h3 mb-4">Git Bash</h3>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                Same script as Linux/macOS — works as-is in Git Bash, MSYS2, or Cygwin.
              </p>
              <CodeBlock
                code={`curl -fsSL "https://raw.githubusercontent.com/galacius/galacius/master/scripts/install.sh" | bash`}
                section="windows_gitbash"
              />
              <p className="text-xs text-muted-foreground">
                Adds it to PATH for Git Bash sessions only. For a system-wide install, use
                PowerShell above instead.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">
              Or click the button below to download the binary directly.
            </p>
            <DownloadButton
              asset="galacius-windows-amd64.exe"
              label="Download for Windows (amd64)"
            />
          </div>
        </div>
      </div>
    </TabsContent>
  )
}
