'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Compass,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Play,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Trophy,
  Users,
  X,
} from 'lucide-react'

const courses = [
  { title: 'Product Design in Practice', category: 'Design', progress: 72, lessons: '18 / 25', color: 'bg-[#dff4ed]', icon: '✦', iconColor: 'text-[#17856d]' },
  { title: 'Building with Next.js', category: 'Development', progress: 48, lessons: '12 / 24', color: 'bg-[#e4efff]', icon: '⌁', iconColor: 'text-[#3769c6]' },
  { title: 'Data Storytelling', category: 'Business', progress: 24, lessons: '6 / 20', color: 'bg-[#fff0d9]', icon: '◒', iconColor: 'text-[#c27618]' },
]

const activities = [
  { title: 'Completed “Design critique fundamentals”', meta: 'Product Design in Practice · 2h ago', icon: CheckCircle2, tone: 'text-[#17856d] bg-[#e4f6ef]' },
  { title: 'Enrolled in “Data Storytelling”', meta: 'Today · 9:42 AM', icon: BookOpen, tone: 'text-[#3769c6] bg-[#e9f0ff]' },
  { title: 'Earned a new certificate', meta: 'Introduction to UX Research · Yesterday', icon: Trophy, tone: 'text-[#c27618] bg-[#fff2dd]' },
]

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-[#edf1f2]" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`${value}% complete`}>
      <div className="h-full rounded-full bg-[#17856d] transition-all" style={{ width: `${value}%` }} />
    </div>
  )
}

export default function Page() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const filteredCourses = useMemo(() => courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#172b2a]">
      <div className="flex min-h-screen">
        <aside className={`${mobileOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-20 flex w-[258px] flex-col border-r border-[#e5ece9] bg-white px-5 py-6 transition-transform lg:static lg:translate-x-0`}>
          <div className="flex items-center justify-between px-2">
            <a href="#" className="flex items-center gap-2.5" aria-label="LearnFlow home">
              <span className="grid size-9 place-items-center rounded-xl bg-[#163b38] text-lg font-bold text-white">L</span>
              <span className="text-[19px] font-bold tracking-[-0.04em]">Learn<span className="text-[#17856d]">Flow</span></span>
            </a>
            <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-[#71817e] hover:bg-[#f1f5f3] lg:hidden" aria-label="Close navigation"><X /></button>
          </div>
          <div className="mt-12 flex flex-1 flex-col">
            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#99a6a3]">Workspace</p>
            <nav className="mt-3 flex flex-col gap-1" aria-label="Main navigation">
              {[['Dashboard', LayoutDashboard], ['Explore courses', Compass], ['My learning', BookOpen], ['Certificates', Trophy]].map(([label, Icon]) => (
                <button key={label as string} onClick={() => { setActiveNav(label as string); setMobileOpen(false) }} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${activeNav === label ? 'bg-[#e7f5f0] text-[#147761]' : 'text-[#667773] hover:bg-[#f4f7f6]'}`}>
                  <Icon className="size-[18px]" /> <span>{label as string}</span>
                  {label === 'My learning' && <span className="ml-auto rounded-full bg-[#dcece7] px-2 py-0.5 text-[11px] text-[#147761]">3</span>}
                </button>
              ))}
            </nav>
            <p className="mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#99a6a3]">Manage</p>
            <nav className="mt-3 flex flex-col gap-1">
              {[['Community', Users], ['Settings', Settings]].map(([label, Icon]) => <button key={label as string} className="flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-[#667773] transition hover:bg-[#f4f7f6]"><Icon className="size-[18px]" />{label as string}</button>)}
            </nav>
          </div>
          <div className="rounded-2xl bg-[#f1f8f5] p-4">
            <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-white text-[#17856d]"><Sparkles className="size-4" /></div>
            <p className="text-sm font-semibold">Keep your streak alive</p>
            <p className="mt-1 text-xs leading-5 text-[#70817d]">You’re on a 5 day learning streak. Keep going!</p>
            <button className="mt-3 text-xs font-bold text-[#147761]">View activity <ArrowRight className="ml-1 inline size-3" /></button>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-[#e5ece9] bg-white px-5 sm:px-8 lg:px-10">
            <button onClick={() => setMobileOpen(true)} className="mr-3 rounded-lg p-2 text-[#60736f] hover:bg-[#f1f5f3] lg:hidden" aria-label="Open navigation"><Menu /></button>
            <div className="relative hidden max-w-[360px] flex-1 sm:block"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9aa8a4]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search your courses" className="h-10 w-full rounded-xl border border-[#e5ece9] bg-[#fafcfb] pl-10 pr-4 text-sm outline-none transition placeholder:text-[#9aa8a4] focus:border-[#77b9a8] focus:ring-2 focus:ring-[#dff2eb]" /></div>
            <div className="ml-auto flex items-center gap-3"><button className="relative rounded-xl p-2.5 text-[#657672] hover:bg-[#f1f5f3]" aria-label="Notifications"><Bell className="size-[19px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#e28153]" /></button><div className="ml-1 flex items-center gap-3 border-l border-[#e5ece9] pl-4"><div className="grid size-9 place-items-center rounded-full bg-[#e7d7c9] text-sm font-bold text-[#704e3a]">JM</div><div className="hidden text-left sm:block"><p className="text-sm font-semibold">Jordan Miller</p><p className="text-xs text-[#879591]">Student</p></div><ChevronRight className="hidden size-4 rotate-90 text-[#9aa8a4] sm:block" /></div></div>
          </header>

          <div className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-medium text-[#7a8b87]">Tuesday, October 8, 2026</p><h1 className="mt-2 text-[30px] font-bold tracking-[-0.04em] sm:text-[34px]">Good morning, Jordan</h1><p className="mt-2 text-[15px] text-[#71817e]">Ready to continue learning?</p></div><button className="flex w-fit items-center gap-2 rounded-xl bg-[#163b38] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#20524d]"><Compass className="size-4" /> Explore courses</button></div>

            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              {[['Enrolled courses', '3', BookOpen, 'text-[#3769c6] bg-[#e9f0ff]'], ['Courses completed', '8', Trophy, 'text-[#c27618] bg-[#fff2dd]'], ['Lessons completed', '46', CheckCircle2, 'text-[#17856d] bg-[#e4f6ef]'], ['Overall progress', '64%', TrendingUp, 'text-[#9b5dca] bg-[#f2eafa]']].map(([label, value, Icon, tone]) => <div key={label as string} className="rounded-2xl border border-[#e5ece9] bg-white p-4 sm:p-5"><div className="flex items-center justify-between"><span className={`grid size-9 place-items-center rounded-xl ${tone as string}`}><Icon className="size-[18px]" /></span><MoreHorizontal className="size-4 text-[#b3bfbc]" /></div><p className="mt-5 text-2xl font-bold tracking-[-0.03em]">{value as string}</p><p className="mt-1 text-xs font-medium text-[#7d8c88]">{label as string}</p></div>)}
            </div>

            <div className="mt-8 grid gap-5 xl:grid-cols-[1.4fr_1fr]">
              <section className="rounded-2xl border border-[#e5ece9] bg-white p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8b9a96]">Continue learning</p><h2 className="mt-2 text-xl font-bold tracking-[-0.03em]">Product Design in Practice</h2><p className="mt-1 text-sm text-[#778783]">Lesson 18 of 25 · Design critique fundamentals</p></div><span className="hidden rounded-lg bg-[#e7f5f0] px-2.5 py-1 text-xs font-bold text-[#147761] sm:block">In progress</span></div><div className="mt-7 flex flex-col gap-5 rounded-2xl bg-[#f3faf7] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"><div className="flex items-center gap-4"><div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#d4eee4] text-2xl text-[#17856d]">✦</div><div><p className="font-semibold">Design critique fundamentals</p><p className="mt-1 flex items-center gap-1.5 text-xs text-[#748682]"><Clock3 className="size-3.5" /> 18 min remaining</p></div></div><button className="flex items-center justify-center gap-2 rounded-xl bg-[#17856d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#126b58]"><Play className="size-4 fill-current" /> Resume</button></div><div className="mt-5 flex items-center justify-between text-xs font-semibold"><span className="text-[#71817e]">Your progress</span><span className="text-[#17856d]">72%</span></div><div className="mt-2"><ProgressBar value={72} /></div></section>
              <section className="rounded-2xl border border-[#e5ece9] bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8b9a96]">Your activity</p><h2 className="mt-2 text-xl font-bold tracking-[-0.03em]">Recent activity</h2></div><button className="text-xs font-bold text-[#147761]">View all</button></div><div className="mt-6 flex flex-col gap-5">{activities.map(({ title, meta, icon: Icon, tone }) => <div key={title} className="flex gap-3"><span className={`grid size-9 shrink-0 place-items-center rounded-xl ${tone}`}><Icon className="size-4" /></span><div className="min-w-0"><p className="text-sm font-semibold leading-5">{title}</p><p className="mt-1 text-xs leading-4 text-[#879591]">{meta}</p></div></div>)}</div></section>
            </div>

            <section className="mt-8"><div className="flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8b9a96]">Keep going</p><h2 className="mt-2 text-xl font-bold tracking-[-0.03em]">My courses</h2></div><button className="text-sm font-semibold text-[#147761]">View all courses <ArrowRight className="ml-1 inline size-4" /></button></div><div className="mt-5 grid gap-4 md:grid-cols-3">{filteredCourses.map((course) => <article key={course.title} className="rounded-2xl border border-[#e5ece9] bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(34,76,66,0.08)]"><div className={`flex h-[116px] items-center justify-center rounded-xl ${course.color}`}><span className={`text-5xl font-light ${course.iconColor}`}>{course.icon}</span></div><div className="mt-4 flex items-start justify-between gap-3"><div><span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8b9a96]">{course.category}</span><h3 className="mt-1 font-bold leading-5">{course.title}</h3></div><button className="rounded-lg p-1 text-[#9aa8a4] hover:bg-[#f1f5f3]" aria-label={`More options for ${course.title}`}><MoreHorizontal className="size-4" /></button></div><div className="mt-5 flex items-center justify-between text-xs"><span className="text-[#7d8c88]">{course.lessons} lessons</span><span className="font-bold text-[#17856d]">{course.progress}%</span></div><div className="mt-2"><ProgressBar value={course.progress} /></div></article>)}{filteredCourses.length === 0 && <div className="rounded-2xl border border-dashed border-[#cfdcd7] bg-white p-8 text-center text-sm text-[#71817e] md:col-span-3">No courses match “{query}”.</div>}</div></section>
          </div>
        </section>
      </div>
    </main>
  )
}
