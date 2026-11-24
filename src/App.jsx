export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Ember & Oak</span>
        <a href="#cta" className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition">
          Reserve
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-rose-600 font-semibold mb-4">Wood-Fired Kitchen</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">A seasonal menu, cooked over open flame</h1>
        <p className="text-lg text-slate-600 mb-10">Locally sourced ingredients, simple technique, and a dining room built for long dinners.</p>
        <a href="#cta" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-rose-700 transition">
          Reserve a Table
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Seasonal Menu</h3>
          <p className="text-slate-600">Dishes change monthly with local harvests.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Private Dining</h3>
          <p className="text-slate-600">A back room available for groups and events.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Curated Wine List</h3>
          <p className="text-slate-600">Small producers hand-picked by our sommelier.</p>
        </div>
      </section>

      <section id="cta" className="bg-rose-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Join us for dinner tonight</h2>
        <p className="mb-8 text-rose-100">Walk-ins welcome, reservations recommended.</p>
        <a href="#" className="inline-block bg-white text-rose-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Reserve a Table
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Ember & Oak. All rights reserved.
      </footer>
    </div>
  )
}
