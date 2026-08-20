import type { ReactNode } from 'react'

/**
 * Nextra's <Steps> auto-numbered its `###` children. Fumadocs' own Steps/Step pair
 * takes only children and numbers nothing, so this wrapper applies Fumadocs' step
 * CSS to the headings instead - every existing <Steps> block migrates unchanged.
 */
export function Steps({ children }: { children: ReactNode }) {
  return <div className="fd-steps [&_h3]:fd-step">{children}</div>
}
