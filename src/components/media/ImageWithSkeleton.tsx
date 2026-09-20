import { useState, type ComponentPropsWithoutRef, type FC } from "react"
import { cn } from "@galacius/design-system/utils"
import { Skeleton } from "./Skeleton"

export type ImageWithSkeletonProps = ComponentPropsWithoutRef<"img"> & {
  /** Optional responsive image sources for picture element (AVIF, WebP, etc.) */
  sources?: ReadonlyArray<{ srcSet: string; type: string; sizes?: string }>
}

// Persists across mounts so a remounted <img> (e.g. inside a dialog that
// unmounts on close) doesn't show a skeleton for a src the browser already
// has cached.
const loadedSrcs = new Set<string>()

export const ImageWithSkeleton: FC<ImageWithSkeletonProps> = ({
  className,
  onLoad,
  alt,
  src,
  sources,
  ...props
}) => {
  const [loaded, setLoaded] = useState(() => typeof src === "string" && loadedSrcs.has(src))

  const markLoaded = () => {
    if (typeof src === "string") loadedSrcs.add(src)
    setLoaded(true)
  }

  const img = (
    <img
      {...props}
      src={src}
      alt={alt}
      ref={(img) => {
        if (img?.complete) markLoaded()
      }}
      onLoad={(event) => {
        markLoaded()
        onLoad?.(event)
      }}
      className={cn(
        "transition-opacity duration-300",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
    />
  )

  return (
    <div className="relative">
      {!loaded && <Skeleton className="absolute inset-0" />}
      {sources && sources.length > 0 ? (
        <picture>
          {sources.map((source) => (
            <source
              key={source.type}
              srcSet={source.srcSet}
              type={source.type}
              sizes={source.sizes}
            />
          ))}
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  )
}
