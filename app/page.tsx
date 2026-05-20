export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Changelogs from<br />
          <span className="text-[#58a6ff]">Git Commits Automatically</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect your GitHub repos, parse conventional commits, and export polished changelogs — categorized by features, fixes, and breaking changes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $12/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-left font-mono text-sm text-[#8b949e] leading-relaxed">
          <p><span className="text-[#3fb950]">## [1.4.0]</span> — 2024-06-01</p>
          <p className="mt-1"><span className="text-[#58a6ff]">### Features</span></p>
          <p>- Add dark mode support (#142)</p>
          <p>- Introduce webhook export endpoint (#138)</p>
          <p className="mt-1"><span className="text-[#f85149]">### Bug Fixes</span></p>
          <p>- Fix token refresh race condition (#145)</p>
          <p className="mt-1"><span className="text-yellow-400]">### Breaking Changes</span></p>
          <p>- Rename `config.yml` to `changelog.config.yml`</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited GitHub repos",
              "Conventional commit parsing",
              "Auto-categorization (features, fixes, breaking)",
              "Markdown & JSON export",
              "Webhook integration",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What commit formats are supported?",
              a: "We support Conventional Commits (feat:, fix:, BREAKING CHANGE:) and Angular-style commit messages out of the box."
            },
            {
              q: "Can I customize the changelog output?",
              a: "Yes. You can configure section names, ordering, and export as Markdown or JSON. Webhook delivery is also available."
            },
            {
              q: "Is my GitHub data secure?",
              a: "We use read-only OAuth scopes and never store your source code — only commit metadata needed to generate changelogs."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
