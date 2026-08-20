import type { ReactNode } from 'react'

type Tone = 'accent' | 'neutral' | 'warn'

// Colours are derived from the Fumadocs theme tokens, so badges follow the
// brand accent and stay legible in both light and dark themes.
const TONES: Record<Tone, { fg: string; bg: string; border: string }> = {
  accent: {
    fg: 'var(--color-fd-primary)',
    bg: 'color-mix(in srgb, var(--color-fd-primary) 12%, transparent)',
    border: 'color-mix(in srgb, var(--color-fd-primary) 40%, transparent)'
  },
  neutral: {
    fg: 'currentColor',
    bg: 'color-mix(in srgb, currentColor 8%, transparent)',
    border: 'color-mix(in srgb, currentColor 25%, transparent)'
  },
  warn: {
    fg: 'var(--color-fd-warning)',
    bg: 'color-mix(in srgb, #f59e0b 14%, transparent)',
    border: 'color-mix(in srgb, #f59e0b 45%, transparent)'
  }
}

export function Badge({
  children,
  tone = 'accent'
}: {
  children: ReactNode
  tone?: Tone
}) {
  const t = TONES[tone]
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.125rem 0.5rem',
        fontSize: '0.75rem',
        fontWeight: 600,
        lineHeight: 1.5,
        borderRadius: '9999px',
        color: t.fg,
        background: t.bg,
        border: `1px solid ${t.border}`,
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </span>
  )
}

/** Supported-framework chips shown on a resource's landing page. */
export function Frameworks({ items }: { items: string[] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '0.375rem',
        marginTop: '1rem'
      }}
    >
      <span style={{ fontSize: '0.75rem', opacity: 0.7, marginRight: '0.125rem' }}>
        Frameworks:
      </span>
      {items.map(item => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  )
}
