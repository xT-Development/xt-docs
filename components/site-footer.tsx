const LINKS = [
  ['Store', 'https://store.xthrasherrr.dev'],
  ['GitHub', 'https://github.com/xT-Development'],
  ['Discord', 'https://discord.xthrasherrr.dev'],
  ['Website', 'https://xthrasherrr.dev']
]

/** Store / GitHub / Discord / Website links, carried over from the Nextra footer. */
export function SiteFooter() {
  return (
    <div className="text-xs text-fd-muted-foreground">
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {LINKS.map(([label, href], i) => (
          <span key={href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>·</span>}
            <a href={href} target="_blank" rel="noreferrer" className="hover:text-fd-primary">
              {label}
            </a>
          </span>
        ))}
      </div>
      <p className="mt-1.5">MIT {new Date().getFullYear()} © xT Development.</p>
    </div>
  )
}
