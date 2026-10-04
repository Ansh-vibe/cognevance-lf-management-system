'use client'

import { ArrowRight, BookOpen, CheckCircle2, Play, ShieldCheck, Sparkles, Users } from 'lucide-react'

const highlights = [
  { icon: BookOpen, title: 'Learn with structure', text: 'Clear courses, modules, and lessons that make progress feel achievable.' },
  { icon: CheckCircle2, title: 'Track every win', text: 'Pick up where you left off and see exactly how far you have come.' },
  { icon: Users, title: 'Grow together', text: 'Build momentum with a focused learning space for every kind of student.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#172b2a]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="/" className="flex items-center gap-2.5" aria-label="LearnFlow home">
          <span className="grid size-9 place-items-center rounded-xl bg-[#163b38] text-lg font-bold text-white">L</span>
          <span className="text-[19px] font-bold tracking-[-0.04em]">Learn<span className="text-[#17856d]">Flow</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#667773] md:flex" aria-label="Main navigation">
          <a href="#features" className="transition hover:text-[#147761]">How it works</a>
          <a href="#about" className="transition hover:text-[#147761]">Why LearnFlow</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/login" className="rounded-xl px-3 py-2 text-sm font-semibold text-[#536763] transition hover:bg-white">Sign in</a>
          <a href="/register" className="rounded-xl bg-[#163b38] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#20524d]">Get started</a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe8de] bg-[#eaf7f1] px-3 py-1.5 text-xs font-bold text-[#147761]"><Sparkles className="size-3.5" /> A calmer way to learn</div>
          <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.065em] sm:text-6xl lg:text-[72px]">Make learning a habit, not a hurdle.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#70817d]">LearnFlow gives students a focused place to discover courses, build momentum, and finish what they start.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17856d] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#126b58]">Start learning free <ArrowRight className="size-4" /></a><a href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d7e4df] bg-white px-5 py-3.5 text-sm font-semibold text-[#36534e] transition hover:border-[#a9c9be]"><Play className="size-4 fill-current text-[#17856d]" /> View student dashboard</a></div>
          <div className="mt-8 flex items-center gap-6 text-xs font-medium text-[#82908c]"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#17856d]" /> Secure by design</span><span>Built for real progress</span></div>
        </div>
        <div className="relative rounded-[28px] border border-[#dbe9e3] bg-white p-4 shadow-[0_24px_80px_rgba(39,91,77,0.12)] sm:p-6">
          <div className="rounded-2xl bg-[#163b38] p-6 text-white sm:p-8"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a8d8c8]">Your learning week</p><p className="mt-2 text-3xl font-bold tracking-[-0.04em]">Keep the rhythm.</p></div><div className="grid size-12 place-items-center rounded-2xl bg-white/10"><Sparkles className="size-5 text-[#b7e8d7]" /></div></div><div className="mt-10 flex items-end gap-2">{[35,55,42,78,62,88,48].map((height, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><div className={`w-full rounded-t-lg ${index === 5 ? 'bg-[#9de1c9]' : 'bg-white/20'}`} style={{ height: `${height}px` }} /><span className="text-[10px] text-white/50">{['M','T','W','T','F','S','S'][index]}</span></div>)}</div></div>
          <div className="grid gap-3 p-2 pt-5 sm:grid-cols-2 sm:p-4"><div className="rounded-2xl bg-[#f2faf6] p-4"><p className="text-xs font-semibold text-[#7c908a]">Current streak</p><p className="mt-2 text-2xl font-bold">5 days</p><p className="mt-1 text-xs text-[#17856d]">You are on a roll</p></div><div className="rounded-2xl bg-[#fff7e9] p-4"><p className="text-xs font-semibold text-[#927c60]">This week</p><p className="mt-2 text-2xl font-bold">4.5 hrs</p><p className="mt-1 text-xs text-[#b67724]">+18% from last week</p></div></div>
        </div>
      </section>

      <section id="features" className="border-y border-[#e5ece9] bg-white"><div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-3 lg:px-10">{highlights.map(({ icon: Icon, title, text }) => <article key={title} className="border-b border-[#e5ece9] py-8 lg:border-b-0 lg:border-r lg:px-10 lg:first:pl-0 lg:last:border-r-0"><Icon className="size-5 text-[#17856d]" /><h2 className="mt-4 text-base font-bold">{title}</h2><p className="mt-2 max-w-sm text-sm leading-6 text-[#778783]">{text}</p></article>)}</div></section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10 lg:py-28"><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#17856d]">Less friction. More follow-through.</p><h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Your next finished course starts with one small step.</h2><a href="/register" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#163b38] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20524d]">Create your account <ArrowRight className="size-4" /></a></section>
    </main>
  )
}
