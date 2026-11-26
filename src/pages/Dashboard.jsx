import React, { useState, useMemo, useEffect } from 'react'

const ORG = 'Institute of Innovation in Technology & Management (IITM), New Delhi'

// Replace this with your API call later
const MOCK_EVENTS = [
    { id: 1, title: 'Vortexa 3.0 12-Hour Hackathon', org: ORG, type: 'Hackathons', applied: 100, deadline: '2026-10-20', description: 'A 12-hour hackathon where teams build and demo a working project. Bring your laptop and your team.' },
    { id: 2, title: 'Tech Quiz Championship', org: ORG, type: 'Quiz', applied: 64, deadline: '2026-10-12', description: 'Rapid-fire tech quiz covering programming, web and general computer science.' },
    { id: 3, title: 'UI/UX Design Sprint', org: ORG, type: 'Workshops', applied: 42, deadline: '2026-10-18', description: 'Hands-on workshop to design and prototype an app screen flow in one session.' },
]

const daysLeft = (deadline) => {
    const end = new Date(deadline + 'T23:59:59')
    return Math.ceil((end - new Date()) / 86400000)
}

const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

function DeadlineBadge({ deadline }) {
    const d = daysLeft(deadline)
    const ended = d < 0
    const urgent = !ended && d <= 3
    const style = ended
        ? 'bg-red-500/10 text-red-500 border-red-500/30'
        : urgent
            ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30'
            : 'bg-green-500/10 text-green-500 border-green-500/30'
    const label = ended ? 'Ended' : d === 0 ? 'Last day' : `${d} day${d > 1 ? 's' : ''} left`
    return <span className={`text-xs px-2.5 py-1 rounded-full border w-fit ${style}`}>{label}</span>
}

function SkeletonRow() {
    return (
        <div className="px-6 py-5 border-b border-border-10 last:border-b-0 animate-pulse flex flex-col gap-2">
            <div className="h-4 w-1/3 bg-white/10 rounded" />
            <div className="h-3 w-2/3 bg-white/5 rounded" />
        </div>
    )
}

function EventModal({ event, isApplied, onToggle, onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    const ended = daysLeft(event.deadline) < 0

    return (
        <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-lg border border-border-10 bg-bg rounded-2xl p-6 flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h2 className="text-xl font-bold">{event.title}</h2>
                        <p className="text-sm text-muted-text">{event.org}</p>
                    </div>
                    <button onClick={onClose} className="text-muted-text hover:text-white cursor-pointer text-xl leading-none">
                        ×
                    </button>
                </div>

                <p className="text-sm">{event.description}</p>

                <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                        <p className="text-muted-text">Type</p>
                        <p className="font-semibold">{event.type}</p>
                    </div>
                    <div>
                        <p className="text-muted-text">Deadline</p>
                        <p className="font-semibold">{formatDate(event.deadline)}</p>
                    </div>
                    <div>
                        <p className="text-muted-text">Applied</p>
                        <p className="font-semibold">{event.applied}</p>
                    </div>
                </div>

                <button
                    disabled={ended && !isApplied}
                    onClick={onToggle}
                    className={`mt-2 py-2.5 rounded-lg font-semibold transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${isApplied
                        ? 'border border-red-500/40 text-red-500 hover:bg-red-500/10'
                        : 'bg-white text-black hover:bg-white/90'
                        }`}
                >
                    {isApplied ? 'Withdraw application' : ended ? 'Applications closed' : 'Apply now'}
                </button>
            </div>
        </div>
    )
}

export default function Dashboard() {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [query, setQuery] = useState('')
    const [type, setType] = useState('All')
    const [tab, setTab] = useState('all') // 'all' | 'mine'
    const [sort, setSort] = useState('deadline') // 'deadline' | 'applied'
    const [myApplied, setMyApplied] = useState(new Set())
    const [selected, setSelected] = useState(null)

    // Fake fetch - swap with real API
    const load = () => {
        setLoading(true)
        setError('')
        setTimeout(() => {
            setEvents(MOCK_EVENTS)
            setLoading(false)
        }, 800)
    }
    useEffect(load, [])

    const toggleApply = (id) => {
        const already = myApplied.has(id)
        setMyApplied((prev) => {
            const next = new Set(prev)
            already ? next.delete(id) : next.add(id)
            return next
        })
        setEvents((prev) =>
            prev.map((e) => (e.id === id ? { ...e, applied: e.applied + (already ? -1 : 1) } : e))
        )
    }

    const types = ['All', ...new Set(events.map((e) => e.type))]

    const filtered = useMemo(() => {
        return events
            .filter(
                (e) =>
                    (tab === 'all' || myApplied.has(e.id)) &&
                    (type === 'All' || e.type === type) &&
                    e.title.toLowerCase().includes(query.toLowerCase())
            )
            .sort((a, b) =>
                sort === 'applied'
                    ? b.applied - a.applied
                    : new Date(a.deadline) - new Date(b.deadline)
            )
    }, [events, query, type, tab, sort, myApplied])

    const upcoming = useMemo(
        () =>
            events
                .filter((e) => daysLeft(e.deadline) >= 0)
                .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))[0],
        [events]
    )

    const stats = [
        { label: 'Total events', value: events.length },
        { label: 'Open now', value: events.filter((e) => daysLeft(e.deadline) >= 0).length },
        { label: 'My applications', value: myApplied.size },
    ]

    const selectedEvent = events.find((e) => e.id === selected)
    const cols = 'md:grid-cols-[60px_1fr_130px_150px_90px]'

    return (
        <div className="w-full flex flex-col items-center min-h-screen px-4 pb-16">
            <div className="w-full max-w-7xl mt-30 flex flex-col gap-6">

                {/* Header */}
                <div>
                    <h1 className="text-5xl font-bold">Dashboard</h1>
                    <p className="text-sm text-muted-text">Track all events and your applications in one place.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {stats.map((s) => (
                        <div key={s.label} className="border border-border-10 bg-muted-bg rounded-2xl p-5 flex flex-col gap-1">
                            <p className="text-sm text-muted-text">{s.label}</p>
                            <p className="text-3xl font-bold">{loading ? '–' : s.value}</p>
                        </div>
                    ))}
                </div>

                {/* Next deadline */}
                {upcoming && (
                    <div onClick={() => setSelected(upcoming.id)} className="border border-border-10 bg-muted-bg rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer hover:bg-white/5 transition">
                        <div>
                            <p className="text-sm text-muted-text">Next deadline</p>
                            <p className="font-semibold">{upcoming.title}</p>
                        </div>
                        <DeadlineBadge deadline={upcoming.deadline} />
                    </div>
                )}

                {/* Table card */}
                <div className="border border-border-10 bg-muted-bg rounded-2xl overflow-hidden">

                    {/* Tabs */}
                    <div className="flex border-b border-border-10 bg-muted-bg">
                        {[['all', 'All events'], ['mine', 'My applications'],].map(([key, label]) => (
                            <button key={key} onClick={() => setTab(key)}
                                className={`px-6 py-3 text-sm font-semibold border-b-2 transition cursor-pointer ${tab === key ? 'border-accent text-accent' : 'border-transparent text-muted-text hover:text-text'}`}>
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Toolbar */}
                    <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between p-4 border-b border-border-10">
                        <div className="flex gap-3 flex-wrap">
                            {types.map((t) => (
                                <button key={t} onClick={() => setType(t)}
                                    className={`px-3 py-1 rounded-full text-sm border transition cursor-pointer ${type === t ? 'bg-accent text-bg border-border-10' : 'border-border-10 text-muted-text hover:scale-106 bg-muted-bg '
                                        }`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-muted-bg border border-border-10 rounded-xl px-3 py-2 text-sm outline-none cursor-pointer">
                                <option value="deadline" className="text-black">Sort: Deadline</option>
                                <option value="applied" className="text-black">Sort: Most applied</option>
                            </select>
                            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search events..." className="bg-muted-bg border border-border-10 rounded-xl px-3 py-2 text-sm outline-none focus:border-accent/40 w-full lg:w-64" />
                        </div>
                    </div>

                    {/* Head */}
                    <div className={`hidden md:grid ${cols} px-6 py-3 text-sm text-muted-text border-b border-border-10`}>
                        <p>S.No</p>
                        <p>Title</p>
                        <p>Type</p>
                        <p>Deadline</p>
                        <p className="text-right">Applied</p>
                    </div>

                    {/* Body */}
                    {loading ? (
                        [...Array(3)].map((_, i) => <SkeletonRow key={i} />)
                    ) : error ? (
                        <div className="text-center py-12 flex flex-col items-center gap-3">
                            <p className="text-red-500">{error}</p>
                            <button onClick={load} className="px-4 py-2 rounded-lg border border-border-10 text-sm hover:bg-white/5 cursor-pointer">Try again</button>
                        </div>
                    ) : filtered.length === 0 ? (
                        <p className="text-center text-muted-text py-12">
                            {tab === 'mine' ? "You haven't applied to any event yet." : 'No events found.'}
                        </p>
                    ) : (
                        filtered.map((e, i) => (
                            <div key={e.id} onClick={() => setSelected(e.id)} className={`grid hover:bg-muted-bg grid-cols-1 ${cols} gap-2 md:gap-0 md:items-center px-6 py-4 border-b border-border-10 last:border-b-0 cursor-pointer`}>
                                <p className="text-muted-text">{i + 1}</p>
                                <div className="flex flex-col pr-4">
                                    <h2 className="text-base font-semibold flex items-center gap-2">
                                        {e.title}
                                        {myApplied.has(e.id) && (
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 font-normal">Applied</span>
                                        )}
                                    </h2>
                                    <p className="text-sm text-muted-text">{e.org}</p>
                                </div>
                                <p className="text-sm">{e.type}</p>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm">{formatDate(e.deadline)}</p>
                                    <DeadlineBadge deadline={e.deadline} />
                                </div>
                                <p className="md:text-right font-semibold">{e.applied}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    isApplied={myApplied.has(selectedEvent.id)}
                    onToggle={() => toggleApply(selectedEvent.id)}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    )
}