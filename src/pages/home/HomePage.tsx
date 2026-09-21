import type { FC } from "react"
import { Download } from "./components/download/Download"
import { Features } from "./components/Features"
import { Hero } from "./components/Hero"
import { Prerequisite } from "./components/Prerequisite"

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Prerequisite />
      <Features />
      <Download />
    </>
  )
}
