export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Plan and communicate{' '}
          <span className="text-[#58a6ff]">API deprecations</span>{' '}
          effectively
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Track endpoint usage analytics, build deprecation timelines with automated milestones, and run customer communication campaigns — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get started — $16/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Usage Analytics', desc: 'See which endpoints are still being called and by whom before you pull the plug.' },
            { title: 'Deprecation Timelines', desc: 'Set milestones, sunset dates, and automated reminders on a visual timeline.' },
            { title: 'Customer Campaigns', desc: 'Send targeted emails and in-API warnings to affected consumers automatically.' }
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8">
          <div className="flex items-end gap-2 mb-1">
            <span className="text-4xl font-bold text-white">$16</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to manage API deprecations end-to-end.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited API endpoints tracked',
              'Automated deprecation milestones',
              'Customer email campaigns',
              'Usage analytics dashboard',
              'Slack & webhook notifications',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does usage tracking work?',
              a: 'You add a lightweight SDK or configure a webhook from your API gateway. We aggregate call counts, consumer IDs, and error rates per endpoint in real time.'
            },
            {
              q: 'Can I customize the deprecation timeline?',
              a: 'Yes. You set the announcement date, migration deadline, and sunset date. The planner auto-generates milestone reminders and draft communications for each stage.'
            },
            {
              q: 'What happens after I subscribe?',
              a: 'You get instant access to the dashboard. Connect your first API in minutes using our guided setup wizard and start planning your first deprecation the same day.'
            }
          ].map((item) => (
            <div key={item.q} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
