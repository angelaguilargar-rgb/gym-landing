const CLASSES = [
  {
    name: 'Entrenamiento Funcional',
    desc: 'Movimiento real para la vida real: agilidad, fuerza y resistencia en circuitos.',
    time: 'Lun · Mi · Vie · 6:30 AM',
  },
  {
    name: 'Fuerza & Powerlifting',
    desc: 'Programa progresivo de sentadilla, peso muerto y press con técnica guiada.',
    time: 'Lun · Mi · Vie · 5:00 PM',
  },
  {
    name: 'Cross Training',
    desc: 'Alta intensidad: mezcla de cardio y trabajo de fuerza en sesiones de 45 min.',
    time: 'Mar · Jue · Sáb · 7:00 PM',
  },
  {
    name: 'Mobility & Core',
    desc: 'Movilidad articular y estabilidad del core para moverte sin dolor.',
    time: 'Mar · Jue · 9:00 AM',
  },
]

const PLANS = [
  { name: 'Pase día', price: 'L 150', desc: 'Prueba el gym antes de comprometerte.', cta: 'Probarlo' },
  { name: 'Mensual', price: 'L 1,200', desc: 'Acceso ilimitado + 1 clase grupal por semana.', cta: 'Empezar', featured: true },
  { name: 'Trimestral', price: 'L 3,000', desc: 'Acceso ilimitado + clases ilimitadas + plan de nutrición.', cta: 'Empezar' },
]

const REVIEWS = [
  { name: 'Carlos M.', text: 'En 4 meses bajé 9 kilos y levanté mi peso muerto al doble. El coaching es de otro nivel.' },
  { name: 'Lucía R.', text: 'Nunca fui de hacer ejercicio hasta que encontré Nexus. Las clases grupales me engancharon.' },
  { name: 'Andrés P.', text: 'Entrenadores que sí corrigen tu técnica. Vale cada lempira.' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            NEXUS<span className="text-signal">GYM</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-fog md:flex">
            <a href="#clases" className="transition-colors hover:text-white">Clases</a>
            <a href="#precios" className="transition-colors hover:text-white">Precios</a>
            <a href="#opiniones" className="transition-colors hover:text-white">Opiniones</a>
          </div>
          <a
            href="#precios"
            className="rounded-full bg-signal px-5 py-2 text-sm font-bold text-ink transition-opacity hover:opacity-90"
          >
            Planes
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
            entrenamiento · fuerza · comunidad
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">
            Tu cuerpo cambia
            <br />
            cuando el
            <span className="text-signal"> gym deja de aburrirte.</span>
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-fog">
            En Nexus Gym entrenamos con propósito: coaches que te corrigen, clases que te retan y
            una comunidad que te espera. Tu primera semana es nuestra invitación.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#precios"
              className="rounded-full bg-signal px-7 py-3 font-bold text-ink transition-opacity hover:opacity-90"
            >
              Entrenar gratis 1 semana
            </a>
            <a
              href="#clases"
              className="rounded-full border border-white/15 px-7 py-3 font-medium transition-colors hover:bg-white/10"
            >
              Ver clases
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['+320', 'miembros activos'],
            ['7', 'clases al día'],
            ['4', 'coaches certificados'],
            ['24/7', 'acceso con plan premium'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-panel p-6">
              <p className="text-4xl font-black text-signal">{value}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-fog">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="clases" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-black tracking-tight">Clases que <span className="text-signal">sí quieres repetir</span></h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/10 bg-panel p-6 transition-colors hover:border-signal/50">
              <h3 className="text-lg font-bold">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{c.desc}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-signal">{c.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="precios" className="bg-panel/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-4xl font-black tracking-tight">Precios <span className="text-signal">sin letra chica</span></h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-7 ${
                  plan.featured
                    ? 'border-signal bg-signal/10'
                    : 'border-white/10 bg-ink'
                }`}
              >
                {plan.featured && (
                  <span className="rounded-full bg-signal px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink">
                    más popular
                  </span>
                )}
                <h3 className="mt-4 text-xl font-bold">{plan.name}</h3>
                <p className="mt-3 text-4xl font-black text-signal">{plan.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-fog">{plan.desc}</p>
                <a
                  href="#contacto"
                  className={`mt-6 block rounded-full py-3 text-center font-bold transition-opacity hover:opacity-90 ${
                    plan.featured ? 'bg-signal text-ink' : 'border border-white/15 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opiniones" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-black tracking-tight">Lo que dice <span className="text-signal">la comunidad</span></h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-panel p-6">
              <p className="text-2xl text-signal">★★★★★</p>
              <p className="mt-3 text-sm leading-relaxed text-fog">"{r.text}"</p>
              <p className="mt-4 font-bold">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contacto" className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <p className="text-xl font-extrabold">NEXUS<span className="text-signal">GYM</span></p>
          <p className="max-w-md text-sm leading-relaxed text-fog">
            Col. Palmira, Tegucigalpa · +504 9999-0000 · hola@nexusgym.hn
            <br />
            Lun a Vie 5:00 AM – 10:00 PM · Sáb 7:00 AM – 8:00 PM
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog/60">
            diseño y desarrollo: Angel Aguilar · almostroteblack
          </p>
        </div>
      </footer>
    </div>
  )
}
