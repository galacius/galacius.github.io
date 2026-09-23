const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const isEnabled = () => Boolean(GA_ID) && typeof window !== "undefined" && import.meta.env.PROD

export const initAnalytics = () => {
  if (!isEnabled() || window.gtag) return

  window.dataLayer = window.dataLayer || []
  // gtag.js requires the real `arguments` object, so this can't be an arrow fn
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag("js", new Date())
  window.gtag("config", GA_ID, { send_page_view: false })

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

export const trackPageView = () => {
  window.gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  })
}

export const trackEvent = (name: string, params?: Record<string, unknown>) => {
  window.gtag?.("event", name, params)
}
