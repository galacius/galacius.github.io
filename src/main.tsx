import { createRoot, hydrateRoot } from "react-dom/client"
import "./styles.css"
import { createAppRouter } from "./router.tsx"
import { createTree } from "./tree.tsx"

const router = createAppRouter()

// TanStack Router only skips its client-side Suspense wrapper around route
// content when `router.ssr` is set — normally done by TanStack Start's own
// hydration flow. We hand-roll SSR (renderToString + hydrateRoot) instead of
// using Start, so without this the client wraps content in a real <Suspense>
// that was never present in the server-rendered HTML, causing a guaranteed
// hydration mismatch (React error #418) on every page load.
router.ssr = { manifest: undefined }

await router.load()
const tree = createTree(router)

const root = document.getElementById("root")!

// Prod builds ship prerendered markup (see plugins/ssg); dev serves an empty
// #root, so there's nothing to hydrate against.
if (root.hasChildNodes()) hydrateRoot(root, tree)
else createRoot(root).render(tree)
