type GaEventParams = {
  action: string
  category?: string
  label?: string
  value?: number
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackGaEvent({ action, category, label, value }: GaEventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}
